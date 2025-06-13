import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
};

export default useSupabase;
