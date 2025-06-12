import React from 'react';
import usePatients from './usePatients';
import { Link } from 'react-router-dom';

const PatientList = () => {
  const { patients, loading, error } = usePatients();

  if (loading) return <div className="text-center p-6">Loading patients...</div>;
  if (error) return <div className="text-center text-red-600">{error.message}</div>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Patient List</h2>
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Hospital</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, i) => (
              <tr key={patient.patient_id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{patient.full_name}</td>
                <td className="px-4 py-2">{patient.code}</td>
                <td className="px-4 py-2">{patient.hospital_name}</td>
                <td className="px-4 py-2">
                  {patient.is_flagged ? (
                    <span className="text-red-500 font-medium">Flagged</span>
                  ) : (
                    <span className="text-green-600 font-medium">Clear</span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <Link
                    to={`/patients/${patient.patient_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
