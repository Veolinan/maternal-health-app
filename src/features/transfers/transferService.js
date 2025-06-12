import supabase from '../../supabaseClient';

// Fetch all transferred patients from Supabase
export async function fetchTransferredPatients() {
  const { data, error } = await supabase
    .from('transferred_patients')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching transfers:', error);
    throw error;
  }

  return data;
}
