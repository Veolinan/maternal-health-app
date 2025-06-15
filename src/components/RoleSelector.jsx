import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-xl font-semibold mb-4">Who are you?</h2>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => navigate('/patient-code')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          I’m a Patient
        </button>
        <button
          onClick={() => navigate('/staff-login')}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          I’m Staff
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
