import React, { useState } from 'react';
import { transferPatient } from '../../features/transfers/transferService';
import { useHospitals } from '../../features/hospital/useHospitals';

const TransferPatient = () => {
  const { hospitals } = useHospitals();
  const [form, setForm] = useState({ patient_code: '', to_hospital_id: '', reason: '' });
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    const { error } = await transferPatient(form);
    setMessage(error ? error.message : 'Patient transfer initiated.');
    if (!error) setForm({ patient_code: '', to_hospital_id: '', reason: '' });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Transfer Patient</h2>
      <form onSubmit={handleTransfer} className="space-y-4">
        <input
          type="text"
          placeholder="Patient Code"
          className="w-full border p-2 rounded"
          value={form.patient_code}
          onChange={(e) => setForm({ ...form, patient_code: e.target.value })}
          required
        />
        <select
          className="w-full border p-2 rounded"
          value={form.to_hospital_id}
          onChange={(e) => setForm({ ...form, to_hospital_id: e.target.value })}
          required
        >
          <option value="">Select Hospital</option>
          {hospitals.map(h => (
            <option key={h.id} value={h.id}>{h.name}</option>
          ))}
        </select>
        <textarea
          placeholder="Reason for Transfer"
          className="w-full border p-2 rounded"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
          required
        />
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded">
          Transfer
        </button>
        {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default TransferPatient;
