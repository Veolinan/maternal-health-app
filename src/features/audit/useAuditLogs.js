import { useEffect, useState } from 'react';
import { fetchAuditLogs } from './auditService';

export const useAuditLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        const data = await fetchAuditLogs();
        setLogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadLogs();
  }, []);

  return { logs, loading, error };
};