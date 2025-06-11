import { useState, useEffect } from 'react';
import { getPatientByCode } from '../services/patientService';

/**
 * Fetch patient info by unique patient code.
 * @param {string} code - Patient code.
 * @returns {{ patient: object|null, loading: boolean, error: any }}
 */
export default function usePatient(code) {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!code) return;

    const fetch = async () => {
      try {
        const result = await getPatientByCode(code);
        setPatient(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [code]);

  return { patient, loading, error };
}