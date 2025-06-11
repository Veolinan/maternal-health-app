import React, { useState } from 'react';
import { requestPatientRecords } from '../../services/transferService';

export default function RequestRecords() {
  const [patientId, setPatientId] = useState('');
  const [hospitalId, setHospitalId] = useState('');
  const [message, setMessage] = useState('');

  const handleRequest = async () => {
    try {
      await requestPatientRecords(patientId, hospitalId);
      setMessage('Request sent successfully.');
    } catch (err) {
      setMessage('Failed to send request.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Request Patient Records</h2>
      <input
        type="text"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        placeholder="Patient ID"
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        value={hospitalId}
        onChange={(e) => setHospitalId(e.target.value)}
        placeholder="Hospital ID"
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={handleRequest}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Request Records
      </button>
      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  );
}
