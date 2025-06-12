import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600">
        <div className="text-center">
          <h2 className="text-2xl font-bold">403 - Forbidden</h2>
          <p>You don’t have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;