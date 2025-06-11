import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PatientLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow">
        <Outlet />
      </div>
    </div>
  );
}
