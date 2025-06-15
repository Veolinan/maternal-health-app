import React, { useState } from 'react';
import RoleSelector from '../components/RoleSelector';

const Landing = () => {
  const [showRoles, setShowRoles] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Welcome to Maternity Companion</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-md">
        Your trusted digital partner for better maternal health outcomes.
      </p>
      <button
        onClick={() => setShowRoles(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        Get Started
      </button>

      {showRoles && <RoleSelector />}
    </div>
  );
};

export default Landing;
