import React, { useState } from 'react';
import { requestPatient } from '../../features/patients/patientService';

const RequestPatient = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);

  const handleRequest = async (e) => {
    e.preventDefault();
    const { error } = await requestPatient(code);
    setStatus(error ? { type: 'error', message: error.message } : { type: 'success', message: 'Patient requested successfully.' });
    if (!error) setCode('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Request Patient by Code</h2>
      <form onSubmit={handleRequest} className="space-y-4">
        <input
          type="text"
          placeholder="Patient Code"
          className="w-full border p-2 rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
          Request
        </button>
        {status && (
          <p className={`text-sm mt-2 text-${status.type === 'error' ? 'red' : 'green'}-600`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default RequestPatient;
