import React, { useState } from 'react';
import { registerUser } from './userService';

const UserRegisterForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    role: 'doctor',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await registerUser(formData);
    setLoading(false);
    setSuccess(response ? 'User registered successfully!' : 'Failed to register user.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-700">Register New User</h2>

      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        required
      />

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
      >
        <option value="doctor">Doctor</option>
        <option value="admin">Admin</option>
        <option value="superuser">Superuser</option>
        <option value="security">Security</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Registering...' : 'Register User'}
      </button>

      {success && <p className="text-sm text-green-600 mt-2">{success}</p>}
    </form>
  );
};

export default UserRegisterForm;
