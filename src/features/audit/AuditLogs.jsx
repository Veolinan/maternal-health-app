import React, { useState, useEffect } from 'react';
import { useAuditLogs } from './useAuditLogs';

const AuditLogs = () => {
  const { logs, loading, error } = useAuditLogs();
  const [search, setSearch] = useState('');

  const filteredLogs = logs.filter(log =>
    log.actor_name.toLowerCase().includes(search.toLowerCase()) ||
    log.action.toLowerCase().includes(search.toLowerCase()) ||
    log.entity.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Audit Logs</h2>

      <input
        type="text"
        placeholder="Search logs..."
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="text-gray-500">Loading audit logs...</p>
      ) : error ? (
        <p className="text-red-500">Error loading audit logs: {error.message}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="p-2 border">User</th>
                <th className="p-2 border">Action</th>
                <th className="p-2 border">Entity</th>
                <th className="p-2 border">Entity ID</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map(log => (
                <tr key={log.id} className="text-sm hover:bg-gray-50">
                  <td className="p-2 border">{log.actor_name}</td>
                  <td className="p-2 border">{log.action}</td>
                  <td className="p-2 border">{log.entity}</td>
                  <td className="p-2 border">{log.entity_id}</td>
                  <td className="p-2 border text-gray-500">{new Date(log.created_at).toLocaleString()}</td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No audit logs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AuditLogs;