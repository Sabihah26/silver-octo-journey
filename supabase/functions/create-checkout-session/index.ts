import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import Stripe from "npm:stripe@17.7.0";
import { createClient } from "npm:@supabase/supabase-js@2.49.1";

function allowedOrigin(origin: string | null) {
  const allowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return origin && allowedOrigins.includes(origin) ? origin : null;
}

serve(async (req) => {
  const origin = allowedOrigin(req.headers.get("origin"));
  const corsHeaders = {
    "Access-Control-Allow-Origin": origin || "null",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { status: origin ? 200 : 403, headers: corsHeaders });
  }

  try {
    if (!origin) throw new Error("This app origin is not allowed.");
    if (req.method !== "POST") throw new Error("Method not allowed.");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Authentication required.");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
    const priceId = Deno.env.get("STRIPE_PRICE_ID");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!stripeSecret || !priceId || !serviceRoleKey) {
      throw new Error("Stripe or Supabase billing secrets are not configured.");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("Invalid or expired session.");

    const admin = createClient(supabaseUrl, serviceRoleKey);
    let { data: profile, error: profileError } = await admin
      .from("profiles")
      .select("stripe_customer_id, is_premium, is_admin, is_complimentary")
      .eq("id", user.id)
      .maybeSingle();
    if (profileError) throw profileError;

    // Accounts created before the profiles trigger existed have no row yet.
    if (!profile) {
      const { data: created, error: createError } = await admin
        .from("profiles")
        .upsert({ id: user.id, email: user.email }, { onConflict: "id" })
        .select("stripe_customer_id, is_premium, is_admin, is_complimentary")
        .single();
      if (createError) throw createError;
      profile = created;
    }
    if (profile.is_premium) throw new Error("Your Premium subscription is already active.");
    if (profile.is_admin || profile.is_complimentary) {
      throw new Error("Your account already has full access.");
    }

    const stripe = new Stripe(stripeSecret);
    let customerId = profile.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;

      const { error: updateError } = await admin
        .from("profiles")
        .update({
          stripe_customer_id: customerId,
          email: user.email,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);
      if (updateError) throw updateError;
    }

    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: new URL("/billing?status=success", origin).toString(),
      cancel_url: new URL("/billing?status=cancelled", origin).toString(),
      client_reference_id: user.id,
      metadata: { supabase_user_id: user.id },
      subscription_data: { metadata: { supabase_user_id: user.id } },
      allow_promotion_codes: true,
    });

    return new Response(JSON.stringify({ url: checkout.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : (error as { message?: string })?.message || "Could not create checkout session.";
    console.error("create-checkout-session failed:", message, error);
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
