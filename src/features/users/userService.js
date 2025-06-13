import supabase from '../../supabaseClient';

export const userService = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('id, full_name, email, role, is_active')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }

  return data;
};

export const registerUser = async ({ full_name, email, role }) => {
  const { data, error } = await supabase
    .from('users')
    .insert([{ full_name, email, role, is_active: true }]);

  if (error) {
    console.error('Failed to register user:', error);
    return null;
  }

  return data;
};
