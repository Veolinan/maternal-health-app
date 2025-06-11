// src/pages/doctor/PatientsList.jsx
import { useEffect, useState } from 'react';
import { getPatients } from '../../services/patientService';

export default function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatients();
      setPatients(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patients List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Code</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Flag</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.code} className="hover:bg-gray-100">
                <td className="py-2 px-4">{p.code}</td>
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">{p.age}</td>
                <td className="py-2 px-4">{p.flag || 'None'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

