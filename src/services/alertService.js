import { supabase } from './supabase';

export const alertService = {
  getRecentAlerts: async () => {
    const { data, error } = await supabase
      .from('questionnaire_responses')
      .select('*, patients(full_name, code)')
      .eq('flagged', true)
      .order('submitted_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    return data;
  }
};
