import { supabase } from '../../lib/supabaseClient';

export const fetchAuditLogs = async () => {
  const { data, error } = await supabase
    .from('view_audit_logs') // uses the SQL view for audit logs
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};