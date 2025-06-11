
// src/pages/doctor/TransferPatient.jsx
import { useState } from 'react';
import { transferPatient } from '../../services/transferService';

export default function TransferPatient() {
  const [form, setForm] = useState({ code: '', targetHospital: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await transferPatient(form.code, form.targetHospital);
    setMessage(res.message);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Transfer Patient</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="code"
          placeholder="Patient Code"
          className="w-full border p-2 rounded"
          value={form.code}
          onChange={handleChange}
          required
        />
        <input
          name="targetHospital"
          placeholder="Target Hospital ID"
          className="w-full border p-2 rounded"
          value={form.targetHospital}
          onChange={handleChange}
          required
        />
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Transfer</button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
      </form>
    </div>
  );
}