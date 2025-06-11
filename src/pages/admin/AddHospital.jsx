// src/pages/admin/AddHospital.jsx
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';

export default function AddHospital() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !location) return setMessage('All fields required');
    await addDoc(collection(db, 'hospitals'), {
      name,
      location,
      created_at: Timestamp.now(),
    });
    setMessage('Hospital added successfully');
    setName('');
    setLocation('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Hospital</h1>
      <div className="mb-4">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Hospital Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Hospital
        </button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
      </div>
    </div>
  );
}
// This is the AddHospital component for the admin to add new hospitals.