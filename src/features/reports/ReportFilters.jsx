import React from 'react';

const ReportFilters = ({ filters, onChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white shadow rounded">
      <select
        value={filters.designation || ''}
        onChange={e => onChange('designation', e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Designations</option>
        <option value="nurse">Nurse</option>
        <option value="doctor">Doctor</option>
      </select>

      <select
        value={filters.destination || ''}
        onChange={e => onChange('destination', e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Destinations</option>
        <option value="lab">Lab</option>
        <option value="ward">Ward</option>
      </select>

      <select
        value={filters.device || ''}
        onChange={e => onChange('device', e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Devices</option>
        <option value="scanner1">Scanner 1</option>
        <option value="scanner2">Scanner 2</option>
      </select>

      <select
        value={filters.cardUid || ''}
        onChange={e => onChange('cardUid', e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Card UIDs</option>
        <option value="123456">123456</option>
        <option value="789012">789012</option>
      </select>
    </div>
  );
};

export default ReportFilters;
