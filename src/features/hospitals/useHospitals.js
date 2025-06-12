import { useState, useEffect } from 'react';
import { fetchHospitals } from './hospitalService';

const useHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const data = await fetchHospitals();
        setHospitals(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadHospitals();
  }, []);

  return { hospitals, loading, error };
};

export default useHospitals;
