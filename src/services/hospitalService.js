import { supabase } from './supabase';

export const hospitalService = {
  getHospitals: async () => {
    const { data, error } = await supabase.from('hospitals').select('*');
    if (error) throw error;
    return data;
  },

  createHospital: async (hospital) => {
    const { data, error } = await supabase.from('hospitals').insert(hospital).select().single();
    if (error) throw error;
    return data;
  }
};
