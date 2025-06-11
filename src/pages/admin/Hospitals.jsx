// src/pages/admin/Hospitals.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      const snapshot = await getDocs(collection(db, 'hospitals'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHospitals(data);
    };
    fetchHospitals();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registered Hospitals</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Location</th>
            <th className="p-2">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map(hospital => (
            <tr key={hospital.id} className="border-t">
              <td className="p-2">{hospital.name}</td>
              <td className="p-2">{hospital.location}</td>
              <td className="p-2">{new Date(hospital.created_at?.seconds * 1000).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
