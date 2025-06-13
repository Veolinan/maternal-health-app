import React from 'react';
import DashboardWidgets from '../../features/dashboard/DashboardWidgets';
import RecentActivityPanel from '../../components/doctor/RecentActivityPanel';

const DoctorDashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardWidgets />
      <RecentActivityPanel />
    </div>
  );
};

export default DoctorDashboard;
