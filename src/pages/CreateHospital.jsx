// src/pages/CreateHospital.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CreateHospital = () => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  if (!user) return <p>Loading...</p>;
  if (user.role?.name !== 'admin') return <Navigate to="/unauthorized" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('hospitals').insert([{ name, location }]);

    if (error) setMessage(`❌ ${error.message}`);
    else setMessage('✅ Hospital created successfully');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
          <label className="block text-sm font-medium">Hospital Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Save
        </button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default CreateHospital;
