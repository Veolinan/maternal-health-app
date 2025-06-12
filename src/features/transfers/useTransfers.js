import { useEffect, useState } from 'react';
import { fetchTransferredPatients } from './transferService';

export const useTransfers = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransfers = async () => {
      try {
        const data = await fetchTransferredPatients();
        setTransfers(data);
      } catch (error) {
        setTransfers([]);
      } finally {
        setLoading(false);
      }
    };

    loadTransfers();
  }, []);

  return { transfers, loading };
};
