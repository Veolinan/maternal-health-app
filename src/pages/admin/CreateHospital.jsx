import React, { useState } from 'react';
import { createHospital } from '../../features/hospital/hospitalService';
import AdminLayout from '../../layouts/AdminLayout';

const CreateHospital = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await createHospital({ name });
    if (error) return setMessage(`Error: ${error.message}`);
    setMessage('Hospital created successfully');
    setName('');
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Register New Hospital</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Hospital Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Create Hospital
        </button>
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>
    </AdminLayout>
  );
};

export default CreateHospital;
