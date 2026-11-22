import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  "https://bdwpavckdqqmionygyvf.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseKey) {
  throw new Error(
    "Missing REACT_APP_SUPABASE_ANON_KEY. Set it in your local or hosting environment."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
