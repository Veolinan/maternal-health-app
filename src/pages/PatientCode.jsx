import React, { useState } from 'react';
import { supabase } from '../supabase';

const PatientCode = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const handleVerify = async () => {
    const { data, error } = await supabase
      .from('patients')
      .select('*')
      .eq('unique_code', code)
      .single();

    if (error || !data) {
      setStatus("Invalid code.");
    } else {
      setStatus("Code verified! Welcome.");
      // Proceed to patient dashboard later
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-bold mb-6">Enter Your Patient Code</h2>
      <input
        type="text"
        placeholder="e.g. P123XYZ"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border px-4 py-2 rounded mb-4"
      />
      <button onClick={handleVerify} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Verify
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default PatientCode;
