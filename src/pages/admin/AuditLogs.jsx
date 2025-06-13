import React from 'react';
import { useAuditLogs } from '../../features/audit/useAuditLogs';
import AdminLayout from '../../layouts/AdminLayout';

const AuditLogs = () => {
  const { logs, loading } = useAuditLogs();

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Audit Logs</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="overflow-auto shadow rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Entity</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-t">
                  <td className="px-4 py-2">{log.actor_name}</td>
                  <td className="px-4 py-2">{log.action}</td>
                  <td className="px-4 py-2">{log.entity}</td>
                  <td className="px-4 py-2 text-gray-500">{new Date(log.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
};

export default AuditLogs;
