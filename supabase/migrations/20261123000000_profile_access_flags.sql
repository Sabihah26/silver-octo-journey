-- Full access that Stripe never touches: admins and complimentary accounts.
-- Set these by hand in the Supabase Table Editor. Users have select-only
-- access to their own row (no update policy), so they cannot grant themselves.
alter table public.profiles
  add column if not exists is_admin boolean not null default false,
  add column if not exists is_complimentary boolean not null default false;
