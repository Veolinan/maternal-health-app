import React, { useState } from 'react';
import { registerUser } from '../../features/auth/authService';
import { useNavigate } from 'react-router-dom';
import PublicLayout from '../../layouts/PublicLayout';

const Register = () => {
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await registerUser(formData);
    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Register
          </button>
          {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
        </form>
      </div>
    </PublicLayout>
  );
};

export default Register;
