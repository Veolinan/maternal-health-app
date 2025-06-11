import React from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const nav = useNavigate();

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Thank You!</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Your responses have been submitted successfully.</p>
      <Button onClick={() => nav('/')}>Back to Home</Button>
    </div>
  );
}
