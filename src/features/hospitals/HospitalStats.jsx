import React from 'react';

const StatCard = ({ label, value, color }) => (
  <div className={`bg-white p-4 rounded shadow border-l-4 ${color}`}>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-lg font-bold text-gray-800">{value}</p>
  </div>
);

const HospitalStats = ({ hospitals }) => {
  const totalHospitals = hospitals.length;
  const totalDoctors = hospitals.reduce((sum, h) => sum + h.total_doctors, 0);
  const totalPatients = hospitals.reduce((sum, h) => sum + h.total_patients, 0);
  const totalFlagged = hospitals.reduce((sum, h) => sum + h.flagged_patients, 0);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard label="Hospitals" value={totalHospitals} color="border-blue-500" />
      <StatCard label="Doctors" value={totalDoctors} color="border-green-500" />
      <StatCard label="Patients" value={totalPatients} color="border-purple-500" />
      <StatCard label="Flagged Patients" value={totalFlagged} color="border-red-500" />
    </div>
  );
};

export default HospitalStats;
