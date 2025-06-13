import React from 'react';
import { useDashboardData } from '../../features/dashboard/useDashboardData';
import DashboardWidgets from '../../features/dashboard/DashboardWidgets';
import AdminLayout from '../../layouts/AdminLayout';

const Dashboard = () => {
  const { stats, loading } = useDashboardData();

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      {loading ? <p>Loading dashboard...</p> : <DashboardWidgets stats={stats} />}
    </AdminLayout>
  );
};

export default Dashboard;
