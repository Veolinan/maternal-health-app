import React from 'react';

const ExportButton = ({ onExport }) => {
  return (
    <button
      onClick={onExport}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-all duration-200"
    >
      Export
    </button>
  );
};

export default ExportButton;
