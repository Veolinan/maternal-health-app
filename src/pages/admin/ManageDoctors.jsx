// src/pages/admin/ManageDoctors.jsx
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../services/firebase';

export default function ManageDoctors() {
  const [hospitals, setHospitals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hospitalId, setHospitalId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      const snapshot = await getDocs(collection(db, 'hospitals'));
      setHospitals(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    const fetchDoctors = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      const doctorList = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(user => user.role === 'doctor');
      setDoctors(doctorList);
    };
    fetchHospitals();
    fetchDoctors();
  }, []);

  const registerDoctor = async () => {
    if (!email || !name || !hospitalId) return setMessage('All fields required');
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, 'defaultPass123');
      await addDoc(collection(db, 'users'), {
        uid: userCred.user.uid,
        email,
        name,
        hospital_id: hospitalId,
        role: 'doctor',
      });
      setMessage('Doctor created successfully');
      setEmail('');
      setName('');
      setHospitalId('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Doctors</h1>

      <div className="mb-6">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Doctor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="border p-2 w-full mb-2"
          value={hospitalId}
          onChange={(e) => setHospitalId(e.target.value)}
        >
          <option value="">Select Hospital</option>
          {hospitals.map(h => (
            <option key={h.id} value={h.id}>{h.name}</option>
          ))}
        </select>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={registerDoctor}
        >
          Register Doctor
        </button>
        {message && <p className="mt-2 text-blue-600">{message}</p>}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">All Doctors</h2>
      <ul className="list-disc pl-5">
        {doctors.map(doc => (
          <li key={doc.id}>{doc.name} – {doc.email}</li>
        ))}
      </ul>
    </div>
  );
}
// This component allows the admin to manage doctors by registering new doctors and viewing the list of existing doctors.
// It fetches the list of hospitals and doctors from Firestore, allows the admin to register a new doctor with a default password, and displays all registered doctors.