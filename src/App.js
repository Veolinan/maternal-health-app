// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CreateHospital from './pages/CreateHospital';
import NotAuthorized from './pages/NotAuthorized';
import './index.css'; // Ensure you have Tailwind CSS imported
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/create-hospital" element={<CreateHospital />} />
        <Route path="/unauthorized" element={<NotAuthorized />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
