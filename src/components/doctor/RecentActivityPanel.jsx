import { useEffect, useState } from 'react';
import { patientService } from '../../features/patients/patientService';
import ConditionTag from './ConditionTag';

const RecentActivityPanel = ({ limit = 5 }) => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    patientService.getRecentActivities(limit).then(setRecent);
  }, [limit]);

  return (
    <div>
      <h4 className="text-md font-semibold mb-2">Recent Activity</h4>
      <ul className="space-y-2">
        {recent.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span>{new Date(item.timestamp).toLocaleString()} - {item.action}</span>
            {item.flagged && <ConditionTag label="Flagged" severity="high" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityPanel;
