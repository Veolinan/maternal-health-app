import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPatientByCode } from '../../features/patients/patientService';

const ConfirmName = () => {
  const code = sessionStorage.getItem('patient_code');
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) {
      navigate('/patient/enter-code');
      return;
    }

    const fetchPatient = async () => {
      const { data, error } = await getPatientByCode(code);
      if (error || !data) {
        navigate('/patient/enter-code');
      } else {
        setPatient(data);
        setLoading(false);
      }
    };

    fetchPatient();
  }, [code, navigate]);

  const handleConfirm = () => {
    sessionStorage.setItem('patient_id', patient.id);
    navigate('/patient/questionnaire');
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold mb-4">Confirm Your Identity</h2>
      <p className="text-lg">Is your name <span className="font-semibold">{patient.full_name}</span>?</p>
      <div className="mt-6 flex justify-center space-x-4">
        <button onClick={handleConfirm} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Yes
        </button>
        <button onClick={() => navigate('/patient/enter-code')} className="bg-gray-300 px-4 py-2 rounded">
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmName;
