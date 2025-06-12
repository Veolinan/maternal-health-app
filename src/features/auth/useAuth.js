import { useState } from 'react';
import { login, logout, signUp, sendResetLink } from './authService';
import { useAuthContext } from './AuthProvider';

export const useAuth = () => {
  const { user, setUser, loading } = useAuthContext();
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      setAuthLoading(true);
      const { user } = await login(credentials);
      setUser(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignup = async (credentials) => {
    try {
      setAuthLoading(true);
      const { user } = await signUp(credentials);
      setUser(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleResetPassword = async (email) => {
    try {
      setAuthLoading(true);
      await sendResetLink(email);
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setAuthLoading(true);
      await logout();
      setUser(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  return {
    user,
    loading,
    authLoading,
    error,
    handleLogin,
    handleSignup,
    handleResetPassword,
    handleLogout,
  };
};