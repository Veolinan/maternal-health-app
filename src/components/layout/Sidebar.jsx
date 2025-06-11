import { Link, useLocation } from "react-router-dom";
import { FaHospital, FaUserMd, FaHome, FaPlus } from "react-icons/fa";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },
  { label: "Hospitals", path: "/admin/hospitals", icon: <FaHospital /> },
  { label: "Add Hospital", path: "/admin/add-hospital", icon: <FaPlus /> },
  { label: "Manage Doctors", path: "/admin/manage-doctors", icon: <FaUserMd /> },
];

const Sidebar = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-64 z-40 bg-indigo-100 dark:bg-gray-800 p-4 border-r transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button className="md:hidden mb-4 text-right w-full" onClick={onClose} aria-label="Close sidebar">
        <span className="text-red-600 dark:text-red-400">Close</span>
      </button>
      <h2 className="text-xl font-semibold text-indigo-700 dark:text-white mb-6">Admin Panel</h2>
      <ul className="space-y-3">
        {navItems.map(({ label, path, icon }) => (
          <li key={path}>
            <Link
              to={path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-indigo-200 dark:hover:bg-gray-700 transition-all duration-150
                ${pathname === path ? "bg-indigo-300 dark:bg-gray-700 font-semibold" : ""}`}
              onClick={onClose}
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;