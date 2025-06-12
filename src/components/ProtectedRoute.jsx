// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, profile } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(profile?.role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
