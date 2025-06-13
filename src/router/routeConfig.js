import React from 'react';
import LandingPage from '../pages/LandingPage';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

import AdminDashboard from '../pages/admin/Dashboard';
import ManageUsers from '../pages/admin/ManageUsers';
import CreateHospital from '../pages/admin/CreateHospital';
import AuditLogs from '../pages/admin/AuditLogs';

import DoctorDashboard from '../pages/doctor/Dashboard';
import Patients from '../pages/doctor/Patients';
import RegisterPatient from '../pages/doctor/RegisterPatient';
import RequestPatient from '../pages/doctor/RequestPatient';
import TransferPatient from '../pages/doctor/TransferPatient';
import Alerts from '../pages/doctor/Alerts';

import ConfirmName from '../pages/patient/ConfirmName';
import EnterCode from '../pages/patient/EnterCode';
import Questionnaire from '../pages/patient/Questionnaire';
import ThankYou from '../pages/patient/ThankYou';

import AdminLayout from '../layouts/AdminLayout';
import DoctorLayout from '../layouts/DoctorLayout';
import PublicLayout from '../layouts/PublicLayout';

const routeConfig = [
  // Public pages
  {
    path: '/',
    element: <LandingPage />,
    layout: PublicLayout,
    isPublic: true,
  },
  {
    path: '/login',
    element: <Login />,
    layout: PublicLayout,
    isPublic: true,
  },
  {
    path: '/register',
    element: <Register />,
    layout: PublicLayout,
    isPublic: true,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    layout: PublicLayout,
    isPublic: true,
  },

  // Patient-facing (no login)
  {
    path: '/patient/enter-code',
    element: <EnterCode />,
    isPublic: true,
  },
  {
    path: '/patient/confirm-name',
    element: <ConfirmName />,
    isPublic: true,
  },
  {
    path: '/patient/questionnaire',
    element: <Questionnaire />,
    isPublic: true,
  },
  {
    path: '/patient/thank-you',
    element: <ThankYou />,
    isPublic: true,
  },

  // Admin
  {
    path: '/admin',
    element: <AdminDashboard />,
    layout: AdminLayout,
    roles: ['admin', 'superuser'],
  },
  {
    path: '/admin/users',
    element: <ManageUsers />,
    layout: AdminLayout,
    roles: ['admin', 'superuser'],
  },
  {
    path: '/admin/create-hospital',
    element: <CreateHospital />,
    layout: AdminLayout,
    roles: ['admin', 'superuser'],
  },
  {
    path: '/admin/audit-logs',
    element: <AuditLogs />,
    layout: AdminLayout,
    roles: ['admin', 'superuser'],
  },

  // Doctor
  {
    path: '/doctor',
    element: <DoctorDashboard />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
  {
    path: '/doctor/patients',
    element: <Patients />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
  {
    path: '/doctor/register-patient',
    element: <RegisterPatient />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
  {
    path: '/doctor/request-patient',
    element: <RequestPatient />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
  {
    path: '/doctor/transfer-patient',
    element: <TransferPatient />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
  {
    path: '/doctor/alerts',
    element: <Alerts />,
    layout: DoctorLayout,
    roles: ['doctor'],
  },
];

export default routeConfig;
