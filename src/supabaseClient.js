import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rzotigsojontydgnncqc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6b3RpZ3Nvam9udHlkZ25uY3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjMxMjYsImV4cCI6MjA1NTg5OTEyNn0.YxEi6g3widThF0_gDte9VOjadY61QJzXSbDL2QO42uE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
