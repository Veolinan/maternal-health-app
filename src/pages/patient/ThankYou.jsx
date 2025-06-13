import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleDone = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
      <p className="text-gray-700 mb-6">Your responses have been submitted successfully.</p>
      <button onClick={handleDone} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Done
      </button>
    </div>
  );
};

export default ThankYou;
