import React, { useState } from 'react';
import ReportFilters from './ReportFilters';
import ExportButton from './ExportButton';
import { useReports } from './useReports';

const ReportsPage = () => {
  const [filters, setFilters] = useState({
    designation: '',
    destination: '',
    device: '',
    cardUid: '',
  });

  const { reports, loading } = useReports(filters);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleExport = () => {
    const csvContent = [
      Object.keys(reports[0] || {}).join(','),
      ...reports.map(r => Object.values(r).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'reports.csv';
    a.click();
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-700">Reports</h1>

      <ReportFilters filters={filters} onChange={handleFilterChange} />

      <div className="flex justify-end">
        <ExportButton onExport={handleExport} />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full mt-4 bg-white border border-gray-200 rounded shadow-sm">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                {reports[0] &&
                  Object.keys(reports[0]).map((key) => (
                    <th key={key} className="px-4 py-2 border-b">
                      {key.replace('_', ' ').toUpperCase()}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {reports.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="px-4 py-2 border-b whitespace-nowrap">
                      {val?.toString()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {reports.length === 0 && <p className="text-center text-gray-500 py-6">No reports found.</p>}
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
