import { useEffect, useState } from 'react';
import { fetchReports } from './reportService';

export const useReports = (filters) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadReports = async () => {
      setLoading(true);
      try {
        const data = await fetchReports(filters);
        setReports(data);
      } catch (err) {
        console.error('Error fetching reports:', err);
      }
      setLoading(false);
    };

    loadReports();
  }, [filters]);

  return { reports, loading };
};
