import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import AdminLayout from './layouts/AdminLayout';
import DoctorLayout from './layouts/DoctorLayout';
import PatientLayout from './layouts/PatientLayout';
import AdminDashboard from './pages/admin/Dashboard';
import PatientsList from './pages/doctor/PatientsList';
import EnterCode from './pages/patient/EnterCode';
import Questionnaire from './pages/patient/Questionnaire';
import ThankYou from './pages/patient/ThankYou';
import ConfirmName from './pages/patient/ConfirmName';
import ManageDoctors from './pages/admin/ManageDoctors';
import AddHospital from './pages/admin/AddHospital';
import Hospitals from './pages/admin/Hospitals';
import RegisterPatient from './pages/doctor/RegisterPatient';
import ViewPatient from './pages/doctor/ViewPatient';
import TransferPatient from './pages/doctor/TransferPatient';
import RequestRecords from './pages/doctor/RequestRecords';
import LandingPage from './pages/LandingPage';
import NotFound from './views/NotFound';

import { useAuth } from './context/AuthContext';

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {!user && <Route path="/login" element={<Login />} />}

        {user && (
          <>
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="hospitals" element={<Hospitals />} />
              <Route path="add-hospital" element={<AddHospital />} />
              <Route path="manage-doctors" element={<ManageDoctors />} />
            </Route>

            <Route path="/doctor/*" element={<DoctorLayout />}>
              <Route path="patients" element={<PatientsList />} />
              <Route path="register" element={<RegisterPatient />} />
              <Route path="view/:id" element={<ViewPatient />} />
              <Route path="transfer/:id" element={<TransferPatient />} />
              <Route path="request-records" element={<RequestRecords />} />
            </Route>
          </>
        )}

        <Route path="/patient/*" element={<PatientLayout />}>
          <Route path="enter" element={<EnterCode />} />
          <Route path="confirm/:code" element={<ConfirmName />} />
          <Route path="questionnaire" element={<Questionnaire />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
