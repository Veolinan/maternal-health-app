// src/pages/patient/EnterCode.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function EnterCode() {
  const [code, setCode] = useState('');
  const nav = useNavigate();

  const next = async () => {
    if (code.length !== 4) return alert('Please enter a 4-digit code');
    nav(`/patient/confirm?code=${code}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Enter Your 4‑Digit Code</h2>
      <Input
        name="code"
        placeholder="e.g., 1234"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        maxLength={4}
      />
      <Button onClick={next}>Next</Button>
    </div>
  );
}
