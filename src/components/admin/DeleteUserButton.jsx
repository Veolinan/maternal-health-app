import { useState } from 'react';
import { userService } from '../../features/users/userService';

const DeleteUserButton = ({ userId, onDeleted }) => {
  const [loading, setLoading] = useState(false);
  const handle = async () => {
    if (!confirm('Delete this user?')) return;
    setLoading(true);
    await userService.deleteUser(userId);
    setLoading(false);
    onDeleted?.();
  };

  return (
    <button
      onClick={handle}
      disabled={loading}
      className="text-red-600 hover:underline disabled:opacity-50"
    >
      {loading ? 'Deleting…' : 'Delete'}
    </button>
  );
};

export default DeleteUserButton;