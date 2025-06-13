import React, { useState } from 'react';
import { registerPatient } from '../../features/patients/patientService';

const RegisterPatient = () => {
  const [form, setForm] = useState({ full_name: '', code: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await registerPatient(form);
    setMessage(error ? error.message : 'Patient registered successfully.');
    if (!error) setForm({ full_name: '', code: '' });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Code"
          className="w-full border p-2 rounded"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          required
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Register
        </button>
        {message && <p className="text-sm mt-2 text-blue-600">{message}</p>}
      </form>
    </div>
  );
};

export default RegisterPatient;
