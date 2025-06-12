import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AccessControlWrapper = ({ roles = [], children }) => {
  const { user } = useAuth(); // assumes { user, loading }

  if (!user) return <Navigate to="/login" replace />;
  if (roles.length > 0 && !roles.includes(user.role)) {
    return <div className="p-6 text-red-600">Access Denied</div>;
  }
  return <>{children}</>;
};

export default AccessControlWrapper;