import { useState } from 'react';
import { userService } from '../../features/users/userService';

const UserRegistrationForm = ({ onRegistered }) => {
  const [form, setForm] = useState({ full_name: '', email: '', role: '' });
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await userService.createUser(form);
    setLoading(false);
    onRegistered?.();
    setForm({ full_name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold">New User</h3>
      {['full_name','email','role'].map(key => (
        <div key={key}>
          <label className="block mb-1 capitalize">{key.replace('_',' ')}</label>
          {key === 'role' ? (
            <select name="role" value={form.role} onChange={change} className="border p-2 w-full">
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          ) : (
            <input name={key} type={key === 'email' ? 'email':'text'} value={form[key]} onChange={change} className="border p-2 w-full" />
          )}
        </div>
      ))}
      <button type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">
        {loading ? 'Creating…' : 'Create User'}
      </button>
    </form>
  );
};

export default UserRegistrationForm;