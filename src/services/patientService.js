import { supabase } from './supabase';

export const patientService = {
  getAll: async () => {
    const { data, error } = await supabase.from('patients').select('*');
    if (error) throw error;
    return data;
  },

  getByCode: async (code) => {
    const { data, error } = await supabase.from('patients').select('*').eq('code', code).single();
    if (error) throw error;
    return data;
  },

  create: async (patientData) => {
    const { data, error } = await supabase.from('patients').insert(patientData).select().single();
    if (error) throw error;
    return data;
  },

  submitQuestionnaire: async (responseData) => {
    const { data, error } = await supabase.from('questionnaire_responses').insert(responseData).select().single();
    if (error) throw error;
    return data;
  }
};
