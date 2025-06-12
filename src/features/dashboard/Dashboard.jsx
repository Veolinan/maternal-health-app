import React from 'react';
import DashboardWidgets from './DashboardWidgets';
import useDashboardData from './useDashboardData';

const Dashboard = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error.message}</div>;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      <DashboardWidgets data={data} />
    </div>
  );
};

export default Dashboard;
