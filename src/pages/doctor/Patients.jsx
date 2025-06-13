import React from 'react';
import PatientList from '../../components/doctor/PatientList';
import PatientSearchBar from '../../components/doctor/PatientSearchBar';

const Patients = () => {
  return (
    <div className="space-y-4">
      <PatientSearchBar />
      <PatientList />
    </div>
  );
};

export default Patients;
