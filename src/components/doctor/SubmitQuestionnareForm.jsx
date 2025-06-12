import { useState } from 'react';
import { patientService } from '../../features/patients/patientService';

const SubmitQuestionnaireForm = ({ patientId, onSubmitted }) => {
  const [form, setForm] = useState({ symptoms: [], notes: '' });
  const [loading, setLoading] = useState(false);

  const toggleSymptom = (symptom) => {
    setForm((f) => ({
      ...f,
      symptoms: f.symptoms.includes(symptom)
        ? f.symptoms.filter((s) => s !== symptom)
        : [...f.symptoms, symptom],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await patientService.submitQuestionnaire(patientId, form);
    setLoading(false);
    onSubmitted?.();
  };

  const SYMPTOMS = ['fever', 'bleeding', 'nausea', 'no_fetal_movement'];

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-4">
      <div className="flex flex-wrap gap-2">
        {SYMPTOMS.map((s) => (
          <label key={s} className="inline-flex items-center space-x-1 bg-gray-100 p-2 rounded cursor-pointer">
            <input
              type="checkbox"
              checked={form.symptoms.includes(s)}
              onChange={() => toggleSymptom(s)}
              className="form-checkbox"
            />
            <span className="capitalize">{s.replace('_', ' ')}</span>
          </label>
        ))}
      </div>
      <textarea
        name="notes"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        placeholder="Additional notes..."
        className="border p-2 w-full rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Submitting…' : 'Submit Questionnaire'}
      </button>
    </form>
  );
};

export default SubmitQuestionnaireForm;
