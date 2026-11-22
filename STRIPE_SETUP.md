# Stripe Premium: Setup Checklist

How Premium works end to end, and what is still needed to switch it on. Status as of **2026-11-22**.

## Flow
1. User signs in at `/auth`. The `handle_new_user` trigger creates their `public.profiles` row.
2. On `/billing`, **Upgrade Now** calls `create-checkout-session`, which redirects to Stripe Checkout (subscription, £75/yr).
3. Stripe sends events to `stripe-webhook`, which sets `profiles.is_premium` (true while the status is `active`/`trialing`).
4. `/billing?status=success` polls `profiles` until Premium shows up.
5. **Manage Subscription** calls `create-customer-portal`, which opens the Stripe billing portal (cancel at period end, update card, invoices).

## Current state
| Piece | Status |
|---|---|
| Stripe product "Full Access", price `price_1UeYoECzGEol4uq8F18REZXj` (£75/year, GBP, tax-inclusive, **live**) | ✅ exists |
| Stripe customer portal config | ✅ exists (cancel at period end, no plan switching) |
| Stripe webhook endpoint | ✅ `we_1UeZvzCzGEol4uq8FmYsmt1V` (live, API version `2026-07-29.dahlia`; the code re-fetches subscriptions with the SDK's pinned version, so this is fine) |
| DB migrations (`profiles`, RLS, trigger, grant) | ✅ applied to remote |
| Edge Functions deployed | ✅ `create-checkout-session`, `create-customer-portal`, `stripe-webhook` deployed 2026-11-22 |
| Edge Function secrets | ✅ `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID`, `ALLOWED_ORIGINS` (currently only `http://localhost:3000`; add the production domain when there is one) |
| Front end (`BillingPage`, `AuthPage`, `PremiumModal`, `PremiumContext`) | ✅ wired, build passes |
| Auth: email + password sign-up/sign-in, email-link login, forgot/reset password | ✅ in `/auth`; email confirmation is required (`mailer_autoconfirm: false`) |

## Auth settings to check (Supabase Dashboard → Authentication → URL Configuration)
- **Site URL**: your production domain.
- **Redirect URLs** must include `http://localhost:3000/**` and `https://YOUR-DOMAIN/**`. Otherwise confirmation, magic-link and password-reset emails redirect to the Site URL instead of `/auth`.
- The built-in Supabase email sender is heavily rate-limited (a few emails per hour). For real users, set up custom SMTP (e.g. Resend) under Authentication → Emails.

## Remaining steps

### 1. Webhook endpoint (Stripe)
- URL: `https://bdwpavckdqqmionygyvf.supabase.co/functions/v1/stripe-webhook`
- API version: `2025-02-24.acacia` (matches `stripe@17.7.0`; the code also handles newer versions)
- Events:
  `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
  `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`,
  `customer.subscription.paused`, `customer.subscription.resumed`,
  `invoice.paid`, `invoice.payment_failed`
- Afterwards, copy its **signing secret** (`whsec_…`) from the Stripe Dashboard → Developers → Webhooks.

### 2. Secrets (Supabase)
`SUPABASE_URL`, `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically to Edge Functions. Set the rest **yourself** in a terminal, so keys never pass through chat:
```powershell
supabase secrets set --project-ref bdwpavckdqqmionygyvf STRIPE_PRICE_ID=price_1UeYoECzGEol4uq8F18REZXj ALLOWED_ORIGINS="http://localhost:3000,https://YOUR-DOMAIN"
```
```powershell
supabase secrets set --project-ref bdwpavckdqqmionygyvf STRIPE_SECRET_KEY=sk_... STRIPE_WEBHOOK_SECRET=whsec_...
```
`ALLOWED_ORIGINS` must list every origin the app is served from (exact match, no trailing slash). Otherwise checkout fails with "This app origin is not allowed."

### 3. Deploy functions (done; re-run after any function change)
```powershell
supabase functions deploy create-checkout-session create-customer-portal stripe-webhook --project-ref bdwpavckdqqmionygyvf
```
`config.toml` already sets `verify_jwt = false` for `stripe-webhook` (Stripe can't send a Supabase JWT, so the function checks the Stripe signature instead) and `true` for the other two.

### 4. Test
- **Prefer Stripe test mode first**: use a test `sk_test_…` key, a test-mode copy of the price, and a test webhook. Then pay with card `4242 4242 4242 4242`.
- Check: after Checkout, `/billing` flips to "Premium Active". `profiles.is_premium` is true. Cancelling in the portal sets `subscription_status` (Premium stays until the period ends, then a `customer.subscription.deleted` event turns it off).
- Function logs: Supabase Dashboard → Edge Functions → logs.

## Not yet done (product decisions)
- **Nothing is actually gated.** Only adverbs check `premium === true`, and no item is flagged. Decide what's free vs Premium and apply `PremiumLock`/`PremiumModal`. Note that `data/freeVerbs.js` uses stale IDs.
- Client-side gating is cosmetic, because all data ships in the JS bundle.
