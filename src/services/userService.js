import { supabase } from './supabase';

export const userService = {
  getAll: async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return data;
  },

  createUser: async (userData) => {
    const { data, error } = await supabase.from('users').insert(userData).select().single();
    if (error) throw error;
    return data;
  },

  updateUser: async (id, updates) => {
    const { data, error } = await supabase.from('users').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
  },

  deleteUser: async (id) => {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw error;
  }
};
