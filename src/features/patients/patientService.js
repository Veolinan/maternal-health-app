import supabase from '../../supabaseClient';

export const fetchPatients = async () => {
  const { data, error } = await supabase
    .from('view_patient_summary')
    .select('*')
    .order('full_name', { ascending: true });

  if (error) throw new Error('Failed to fetch patients: ' + error.message);
  return data;
};

export const fetchPatientById = async (id) => {
  const { data, error } = await supabase
    .from('view_patient_summary')
    .select('*')
    .eq('patient_id', id)
    .single();

  if (error) throw new Error('Failed to fetch patient: ' + error.message);
  return data;
};
