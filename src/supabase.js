import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nixmmbzldxspcxlxgbvm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5peG1tYnpsZHhzcGN4bHhnYnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4NDY1MzgsImV4cCI6MjA5OTQyMjUzOH0.5XAZjyi-9m8s1QGpIrDTeD0fRHXKMyWEe5Qsx1rrbxc";

export const supabase = createClient(supabaseUrl, supabaseKey);
