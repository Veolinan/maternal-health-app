import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPatientByCode } from '../../services/patientService';

export default function ConfirmName() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { code } = useParams();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientByCode(code);
        if (!data) {
          setError('Patient not found.');
        } else {
          setPatient(data);
        }
      } catch (err) {
        setError('Something went wrong. Try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchPatient();
  }, [code]);

  const handleConfirm = () => {
    navigate(`/patient/questionnaire?code=${code}`);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Confirm Your Name</h2>
        <p className="text-lg mb-6">Is your name <strong>{patient.name}</strong>?</p>
        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Yes, Continue
        </button>
      </div>
    </div>
  );
}