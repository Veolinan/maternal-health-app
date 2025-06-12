import { NavLink } from 'react-router-dom';

const DoctorSidebar = () => (
  <nav className="bg-blue-800 text-white w-56 p-4 space-y-3 min-h-screen">
    <NavLink to="/doctor/dashboard" className="block px-3 py-2 rounded hover:bg-blue-700">
      Dashboard
    </NavLink>
    <NavLink to="/doctor/patients" className="block px-3 py-2 rounded hover:bg-blue-700">
      Patients
    </NavLink>
    <NavLink to="/doctor/alerts" className="block px-3 py-2 rounded hover:bg-blue-700">
      Alerts
    </NavLink>
    <NavLink to="/doctor/register" className="block px-3 py-2 rounded hover:bg-blue-700">
      Register Patient
    </NavLink>
  </nav>
);

export default DoctorSidebar;