import { supabase } from '../services/supabase';

export const useAuth = () => {
  const login = async (email, password) => {
    return await supabase.auth.signInWithPassword({ email, password });
  };

  const logout = async () => {
    return await supabase.auth.signOut();
  };

  const getUser = () => {
    return supabase.auth.getUser();
  };

  return { login, logout, getUser };
};
export default useAuth;