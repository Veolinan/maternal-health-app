// src/pages/doctor/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import { ClipboardDocumentListIcon, UserPlusIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon, UsersIcon } from '@heroicons/react/24/outline';

const doctorSections = [
  {
    title: 'Patients List',
    description: 'View all patients under your hospital.',
    icon: UsersIcon,
    route: '/doctor/patients',
    color: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  },
  {
    title: 'Register Patient',
    description: 'Add a new patient and auto-assign a unique code.',
    icon: UserPlusIcon,
    route: '/doctor/register-patient',
    color: 'bg-green-100 text-green-800 hover:bg-green-200',
  },
  {
    title: 'Transfer Patient',
    description: 'Send patient to another hospital with history.',
    icon: ArrowRightOnRectangleIcon,
    route: '/doctor/transfer-patient',
    color: 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  },
  {
    title: 'Request Records',
    description: 'Ask other hospitals for patient data.',
    icon: MagnifyingGlassIcon,
    route: '/doctor/request-records',
    color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  },
];

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome Doctor. Manage your patients and data here.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctorSections.map(({ title, description, icon: Icon, route, color }) => (
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