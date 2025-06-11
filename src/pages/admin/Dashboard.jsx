// src/pages/admin/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import { BriefcaseIcon, PlusCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const adminSections = [
  {
    title: 'View Hospitals',
    description: 'See all registered hospitals in the system.',
    icon: BriefcaseIcon,
    route: '/admin/hospitals',
    color: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  },
  {
    title: 'Add Hospital',
    description: 'Register a new hospital to the system.',
    icon: PlusCircleIcon,
    route: '/admin/add-hospital',
    color: 'bg-green-100 text-green-800 hover:bg-green-200',
  },
  {
    title: 'Manage Doctors',
    description: 'Register and view all doctors.',
    icon: UserPlusIcon,
    route: '/admin/manage-doctors',
    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome Admin! Manage hospitals, users, and more from here.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminSections.map(({ title, description, icon: Icon, route, color }) => (
          <div
            key={title}
            onClick={() => navigate(route)}
            className={`cursor-pointer rounded-xl shadow-md transition duration-200 ease-in-out p-6 ${color}`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-white">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
