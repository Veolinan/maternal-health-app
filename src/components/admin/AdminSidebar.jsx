import { NavLink } from 'react-router-dom';
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg';

const AdminSidebar = () => (
  <nav className="bg-gray-800 text-white w-64 p-4 space-y-4">
    <NavLink to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
      <UsersIcon className="w-5 h-5" /><span>Dashboard</span>
    </NavLink>
    <NavLink to="/admin/manage-users" className="hover:bg-gray-700 p-2 rounded">Manage Users</NavLink>
    <NavLink to="/admin/create-hospital" className="hover:bg-gray-700 p-2 rounded">Create Hospital</NavLink>
    <NavLink to="/admin/audit-logs" className="hover:bg-gray-700 p-2 rounded">Audit Logs</NavLink>
  </nav>
);

export default AdminSidebar;