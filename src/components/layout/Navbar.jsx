import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import RoleSwitcher from "./RoleSwitcher";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ onMenuClick }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-gray-700 dark:text-white" onClick={onMenuClick} aria-label="Open sidebar">
          <FaBars size={24} />
        </button>
        <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
          Maternal Health
        </Link>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <RoleSwitcher />
        <span className="text-gray-700 dark:text-gray-300">{currentUser?.name} ({currentUser?.role})</span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;