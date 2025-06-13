import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitQuestionnaire } from '../../features/patients/patientService';

const symptomsOptions = ['Fever', 'Cough', 'Headache', 'Shortness of breath', 'Fatigue'];

const Questionnaire = () => {
  const navigate = useNavigate();
  const patientId = sessionStorage.getItem('patient_id');
  const [selected, setSelected] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const toggleSymptom = (symptom) => {
    setSelected(prev =>
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selected.length === 0) return;

    setSubmitting(true);
    await submitQuestionnaire({
      patient_id: patientId,
      responses: { symptoms: selected },
    });
    navigate('/patient/thank-you');
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-6">How are you feeling today?</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {symptomsOptions.map(symptom => (
            <label
              key={symptom}
              className={`p-3 border rounded cursor-pointer text-center ${
                selected.includes(symptom) ? 'bg-blue-100 border-blue-500' : ''
              }`}
              onClick={() => toggleSymptom(symptom)}
            >
              {symptom}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          disabled={selected.length === 0 || submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Questionnaire;
