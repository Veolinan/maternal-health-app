import { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import { userService } from '../../features/users/userService';
import RoleBadge from './RoleBadge';

const UserEditModal = ({ isOpen, onClose, user, onSaved }) => {
  const [form, setForm] = useState({ full_name: '', role: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) setForm({ full_name: user.full_name, role: user.role });
  }, [user]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const save = async () => {
    setLoading(true);
    await userService.updateUser(user.id, form);
    setLoading(false);
    onSaved?.();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Edit ${user?.full_name}`}>
      <div className="space-y-4">
        <div><label>Name</label><input name="full_name" value={form.full_name} onChange={handleChange} className="border w-full p-2" /></div>
        <div><label>Role</label>
          <select name="role" value={form.role} onChange={handleChange} className="border w-full p-2">
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
        <button onClick={save} disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
          {loading ? 'Saving…' : 'Save'}
        </button>
      </div>
    </Modal>
  );
};

export default UserEditModal;