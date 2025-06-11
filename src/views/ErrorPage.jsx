// src/pages/ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-100 via-red-200 to-red-300 px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 text-center animate-fade-in-up max-w-md w-full">
        <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mx-auto mb-4 animate-bounce" />
        <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or go back to the homepage.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}