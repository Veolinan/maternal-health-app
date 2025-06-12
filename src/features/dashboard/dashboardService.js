import supabase from '../../supabaseClient';

export const fetchDashboardData = async () => {
  const { data, error } = await supabase.rpc('view_system_usage_summary');
  if (error) throw new Error(error.message);

  return {
    totalUsers: data.total_users,
    totalHospitals: data.total_hospitals,
    totalPatients: data.total_patients,
    totalSubmissions: data.total_submissions,
    totalFlagged: data.total_flagged,
    totalInactive: data.total_inactive,
  };
};
