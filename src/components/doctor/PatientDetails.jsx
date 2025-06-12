import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { patientService } from '../../features/patients/patientService';
import FlagConditionModal from './FlagConditionModal';
import ConditionTag from './ConditionTag';
import QuestionnaireViewer from './QuestionnaireViewer';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [showFlag, setShowFlag] = useState(false);

  useEffect(() => {
    patientService.getPatientById(id).then(setPatient);
  }, [id]);

  if (!patient) return <div>Loading…</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{patient.full_name}</h2>
      <div className="space-y-2">
        <div>Code: <span className="font-mono">{patient.code}</span></div>
        <div>Status: {patient.flagged ? <ConditionTag label="Flagged" severity="high" /> : 'OK'}</div>
      </div>

      <button
        onClick={() => setShowFlag(true)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Flag Patient
      </button>

      <QuestionnaireViewer patientId={id} />

      {showFlag && (
        <FlagConditionModal
          isOpen={showFlag}
          onClose={() => setShowFlag(false)}
          onFlag={(reason) =>
            patientService.flagPatient(id, reason).then(() => setPatient(prev => ({ ...prev, flagged: true })))
          }
        />
      )}
    </div>
  );
};

export default PatientDetails;
