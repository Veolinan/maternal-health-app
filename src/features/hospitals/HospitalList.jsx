import React from 'react';
import useHospitals from './useHospitals';
import HospitalStats from './HospitalStats';

const HospitalList = () => {
  const { hospitals, loading, error } = useHospitals();

  if (loading) return <div className="text-center py-10">Loading hospitals...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error.message}</div>;

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Hospital Overview</h2>
      <HospitalStats hospitals={hospitals} />

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Hospital Name</th>
              <th className="p-4">Total Doctors</th>
              <th className="p-4">Total Patients</th>
              <th className="p-4 text-red-600">Flagged Patients</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital, index) => (
              <tr key={hospital.hospital_id} className="border-t hover:bg-gray-50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 font-medium text-gray-900">{hospital.hospital_name}</td>
                <td className="p-4">{hospital.total_doctors}</td>
                <td className="p-4">{hospital.total_patients}</td>
                <td className="p-4 text-red-600">{hospital.flagged_patients}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalList;
