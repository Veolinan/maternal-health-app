import React from 'react';

const WidgetCard = ({ title, value, icon, color }) => (
  <div className={`flex items-center p-4 bg-white rounded shadow-md border-t-4 ${color}`}>
    <div className="mr-4 text-3xl">{icon}</div>
    <div>
      <p className="text-gray-600">{title}</p>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const DashboardWidgets = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <WidgetCard
        title="Total Users"
        value={data.totalUsers}
        icon="👤"
        color="border-blue-500"
      />
      <WidgetCard
        title="Total Hospitals"
        value={data.totalHospitals}
        icon="🏥"
        color="border-green-500"
      />
      <WidgetCard
        title="Total Patients"
        value={data.totalPatients}
        icon="🧑‍⚕️"
        color="border-purple-500"
      />
      <WidgetCard
        title="Flagged Responses"
        value={data.totalFlagged}
        icon="🚩"
        color="border-red-500"
      />
      <WidgetCard
        title="Inactive Patients"
        value={data.totalInactive}
        icon="😴"
        color="border-yellow-500"
      />
    </div>
  );
};

export default DashboardWidgets;
