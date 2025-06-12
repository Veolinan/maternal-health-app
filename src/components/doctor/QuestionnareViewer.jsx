import { useEffect, useState } from 'react';
import { patientService } from '../../features/patients/patientService';
import ConditionTag from './ConditionTag';

const QuestionnaireViewer = ({ patientId }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    patientService.getQuestionnaireResponses(patientId).then(setResponses);
  }, [patientId]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Questionnaire History</h3>
      {responses.length === 0 && <p>No submissions yet.</p>}
      {responses.map((q) => (
        <div key={q.id} className="p-4 border rounded space-y-2">
          <div className="flex justify-between">
            <span>{new Date(q.submitted_at).toLocaleString()}</span>
            {q.flagged && <ConditionTag label="Flagged" severity="high" />}
          </div>
          <pre className="bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(q.responses, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default QuestionnaireViewer;
