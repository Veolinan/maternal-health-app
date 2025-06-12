import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-blue-600 hover:text-blue-800">
          🏥 ResQnode Admin
        </Link>

        <nav className="space-x-4">
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/reports" className="text-gray-700 hover:text-blue-600">Reports</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            to="/profile"
            className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center hover:bg-gray-300"
          >
            👤
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;