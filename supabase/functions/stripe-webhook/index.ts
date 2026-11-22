import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "npm:stripe@17.7.0";
import { createClient } from "npm:@supabase/supabase-js@2.49.1";

const premiumStatuses = new Set(["active", "trialing"]);

const subscriptionEvents = new Set([
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "customer.subscription.paused",
  "customer.subscription.resumed",
]);

// Newer Stripe API versions moved current_period_end onto subscription items.
function periodEnd(subscription: Stripe.Subscription): string | null {
  // deno-lint-ignore no-explicit-any
  const sub = subscription as any;
  const seconds = sub.current_period_end ?? sub.items?.data?.[0]?.current_period_end;
  return seconds ? new Date(seconds * 1000).toISOString() : null;
}

function idOf(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null;
  return typeof value === "string" ? value : value.id;
}

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!signature || !webhookSecret || !stripeSecret || !serviceRoleKey) {
    return new Response("Webhook configuration missing.", { status: 400 });
  }

  const stripe = new Stripe(stripeSecret);
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(
      await req.text(),
      signature,
      webhookSecret,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid signature.";
    return new Response(`Webhook signature verification failed: ${message}`, { status: 400 });
  }

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, serviceRoleKey);

  const findUserByCustomer = async (customerId: string | null) => {
    if (!customerId) return null;
    const { data, error } = await admin
      .from("profiles")
      .select("id")
      .eq("stripe_customer_id", customerId)
      .maybeSingle();
    if (error) throw error;
    return data?.id ?? null;
  };

  // Always re-fetch the subscription so out-of-order events can't overwrite newer state.
  const syncSubscription = async (subscriptionId: string, fallbackUserId: string | null) => {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const customerId = idOf(subscription.customer);
    const userId = subscription.metadata?.supabase_user_id ||
      fallbackUserId ||
      await findUserByCustomer(customerId);

    if (!userId) {
      console.warn(`No Supabase user found for subscription ${subscription.id}`);
      return;
    }

    const { error } = await admin
      .from("profiles")
      .update({
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        is_premium: premiumStatuses.has(subscription.status),
        subscription_status: subscription.status,
        subscription_period_end: periodEnd(subscription),
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);
    if (error) throw error;
  };

  try {
    if (
      event.type === "checkout.session.completed" ||
      event.type === "checkout.session.async_payment_succeeded"
    ) {
      const session = event.data.object as Stripe.Checkout.Session;
      const subscriptionId = idOf(session.subscription);
      const userId = session.metadata?.supabase_user_id || session.client_reference_id || null;
      if (subscriptionId) await syncSubscription(subscriptionId, userId);
    } else if (subscriptionEvents.has(event.type)) {
      const subscription = event.data.object as Stripe.Subscription;
      await syncSubscription(subscription.id, null);
    } else if (event.type === "invoice.paid" || event.type === "invoice.payment_failed") {
      // deno-lint-ignore no-explicit-any
      const invoice = event.data.object as any;
      const subscriptionId = idOf(invoice.subscription) ||
        idOf(invoice.parent?.subscription_details?.subscription);
      if (subscriptionId) await syncSubscription(subscriptionId, null);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not process Stripe event.";
    console.error(`Stripe webhook ${event.type} failed:`, message);
    return new Response(message, { status: 500 });
  }
});
