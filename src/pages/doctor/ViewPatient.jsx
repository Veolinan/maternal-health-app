// src/pages/doctor/ViewPatient.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatientByCode } from "../../services/patientService";

export default function ViewPatient() {
  const { code } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchPatient() {
      const data = await getPatientByCode(code);
      setPatient(data);
    }
    fetchPatient();
  }, [code]);

  if (!patient) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Code:</strong>{patient.code}</p>
        <p><strong>Status:</strong>{patient.status}</p>
        <p><strong>History:</strong>{patient.history?.join(',')|| 'N/A'}</p>        
      </div>
    </div>
  );
}