import { createClient } from '@supabase/supabase-js'

export const supabase = () => {
  console.log(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

  return createClient(
    `${process.env.SUPABASE_URL}`,
    `${process.env.SUPABASE_ANON_KEY}`
  );
}
