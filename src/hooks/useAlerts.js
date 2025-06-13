import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

const useAlerts = () => {
  const success = useCallback((message) => {
    toast.success(message || 'Success!');
  }, []);

  const error = useCallback((message) => {
    toast.error(message || 'Something went wrong.');
  }, []);

  const loading = useCallback((message) => {
    toast.loading(message || 'Processing...');
  }, []);

  return { success, error, loading };
};

export default useAlerts;
