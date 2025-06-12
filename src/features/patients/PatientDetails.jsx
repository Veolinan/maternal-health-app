import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientById } from './patientService';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPatientById(id);
        setPatient(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <div className="p-6">Loading patient...</div>;
  if (error) return <div className="text-red-600 p-6">{error.message}</div>;
  if (!patient) return <div className="p-6">No patient found.</div>;

  return (
    <div className="p-6 bg-white rounded shadow space-y-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800">Patient Details</h2>
      <div className="text-sm text-gray-700 space-y-2">
        <p><strong>Full Name:</strong> {patient.full_name}</p>
        <p><strong>Code:</strong> {patient.code}</p>
        <p><strong>Hospital:</strong> {patient.hospital_name}</p>
        <p><strong>Registered:</strong> {new Date(patient.registration_date).toLocaleDateString()}</p>
        <p>
          <strong>Status:</strong>{' '}
          {patient.is_flagged ? (
            <span className="text-red-500 font-medium">Flagged</span>
          ) : (
            <span className="text-green-600 font-medium">Clear</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PatientDetails;
