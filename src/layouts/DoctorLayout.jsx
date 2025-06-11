import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from '../services/authService';

export default function DoctorLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 p-6 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold mb-6">Doctor Panel</h2>
        <nav className="space-y-4">
          <NavLink to="patients" className={({ isActive }) => isActive ? "text-teal-300" : ""}>My Patients</NavLink>
        </nav>
        <button onClick={logout} className="mt-8 text-red-400 hover:text-red-600">Logout</button>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
