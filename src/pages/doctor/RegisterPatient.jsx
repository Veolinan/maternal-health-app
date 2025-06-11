// src/pages/doctor/RegisterPatient.jsx
import { useState } from 'react';
import { registerPatient } from '../../services/patientService';

export default function RegisterPatient() {
  const [form, setForm] = useState({ name: '', age: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await registerPatient(form);
    setLoading(false);
    setSuccess(res);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register New Patient</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Registering...' : 'Register'}
        </button>
        {success && (
          <p className="text-green-600 mt-2">Patient registered with code: <strong>{success.code}</strong></p>
        )}
      </form>
    </div>
  );
}