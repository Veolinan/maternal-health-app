import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Please enter a valid code.');
      return;
    }

    // Save code to session storage for next step
    sessionStorage.setItem('patient_code', code.trim());
    navigate('/patient/confirm-name');
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Enter Patient Code</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Enter your patient code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Continue
        </button>
      </form>
    </div>
  );
};

export default EnterCode;
