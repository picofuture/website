import { createClient } from '@supabase/supabase-js'

export const getSupabaseClient = () => {
  console.log(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

  return createClient(
    `${process.env.SUPABASE_URL}`,
    `${process.env.SUPABASE_ANON_KEY}`
  );
}
