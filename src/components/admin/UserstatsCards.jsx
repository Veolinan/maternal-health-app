import { useEffect, useState } from 'react';
import { dashboardService } from '../../features/dashboard/dashboardService';

const UserStatsCards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    dashboardService.fetchUserStats().then(setData);
  }, []);

  if (!data) return <div>Loading stats...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: 'Total Users', value: data.totalUsers },
        { label: 'Admins', value: data.adminCount },
        { label: 'Doctors', value: data.doctorCount },
        { label: 'Active Users', value: data.activeCount }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-gray-600">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default UserStatsCards;