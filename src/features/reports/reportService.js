import supabase from '../../supabaseClient';

export async function fetchReports(filters) {
  let query = supabase.from('view_access_logs').select('*');

  if (filters.designation) query = query.eq('designation', filters.designation);
  if (filters.destination) query = query.eq('destination', filters.destination);
  if (filters.device) query = query.eq('device', filters.device);
  if (filters.cardUid) query = query.eq('card_uid', filters.cardUid);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}
