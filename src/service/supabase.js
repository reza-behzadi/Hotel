import { createClient } from "@supabase/supabase-js";
 export const supabaseUrl = "https://ctllcbnczuffpdrorcja.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bGxjYm5jenVmZnBkcm9yY2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyODkwNzQsImV4cCI6MjAxNzg2NTA3NH0.GGZDyI58JOshjtqcHDVUpbKEyYAh8SVIqNt_RwY6msY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;