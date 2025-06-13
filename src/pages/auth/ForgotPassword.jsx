import React, { useState } from 'react';
import { sendPasswordReset } from '../../features/auth/authService';
import PublicLayout from '../../layouts/PublicLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleReset = async (e) => {
    e.preventDefault();
    const { error } = await sendPasswordReset(email);
    if (error) {
      setStatus({ type: 'error', message: error.message });
    } else {
      setStatus({ type: 'success', message: 'Password reset email sent.' });
    }
  };

  return (
    <PublicLayout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Send Reset Link
          </button>
          {status && (
            <p className={`text-sm mt-2 text-${status.type === 'error' ? 'red' : 'green'}-600`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </PublicLayout>
  );
};

export default ForgotPassword;
