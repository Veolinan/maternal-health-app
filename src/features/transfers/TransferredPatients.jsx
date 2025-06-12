import React from 'react';
import { useTransfers } from './useTransfers';

const TransferredPatients = () => {
  const { transfers, loading } = useTransfers();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-700">Transferred Patients</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading transfers...</p>
      ) : transfers.length === 0 ? (
        <p className="text-center text-gray-400">No transferred patients found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead className="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th className="py-2 px-4 border">Patient Name</th>
                <th className="py-2 px-4 border">From</th>
                <th className="py-2 px-4 border">To</th>
                <th className="py-2 px-4 border">Reason</th>
                <th className="py-2 px-4 border">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {transfers.map((t, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{t.patient_name}</td>
                  <td className="py-2 px-4 border">{t.from_location}</td>
                  <td className="py-2 px-4 border">{t.to_location}</td>
                  <td className="py-2 px-4 border">{t.reason}</td>
                  <td className="py-2 px-4 border">{new Date(t.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransferredPatients;
