import supabase from '../../supabaseClient';

export const fetchHospitals = async () => {
  const { data, error } = await supabase.from('view_hospital_overview').select('*');
  if (error) throw new Error('Failed to fetch hospitals: ' + error.message);
  return data;
};
