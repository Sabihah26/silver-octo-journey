import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  "https://bdwpavckdqqmionygyvf.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY?.trim();

export const isSupabaseConfigured = Boolean(
  supabaseKey && supabaseKey !== "your_supabase_anon_public_key"
);

if (!isSupabaseConfigured) {
  console.error(
    "Supabase is not configured. Sign-in, reports, and premium access are unavailable until REACT_APP_SUPABASE_ANON_KEY is set in the hosting environment."
  );
}

export const supabase = createClient(
  supabaseUrl,
  isSupabaseConfigured ? supabaseKey : "supabase-not-configured"
);
