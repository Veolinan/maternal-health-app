import React from 'react';
import { useAlerts } from '../../hooks/useAlerts';

const Alerts = () => {
  const { alerts } = useAlerts();

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Flagged Alerts</h2>
      {alerts.length === 0 ? (
        <p className="text-gray-600">No flagged patients.</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map(alert => (
            <li key={alert.id} className="border p-4 rounded shadow-sm">
              <p><strong>Patient:</strong> {alert.full_name}</p>
              <p><strong>Reason:</strong> {alert.flagged_reason}</p>
              <p className="text-sm text-gray-500">Flagged on: {new Date(alert.submitted_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;
