import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const UserRoleAssigner = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    const { data } = await supabase.from('users').select('id, email, role_id');
    setUsers(data || []);
  };

  const fetchRoles = async () => {
    const { data } = await supabase.from('roles').select('*');
    setRoles(data || []);
  };

  const assignRole = async (userId, roleId) => {
    await supabase.from('users').update({ role_id: roleId }).eq('id', userId);
    fetchUsers();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Assign Roles to Users</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">User Email</th>
            <th className="p-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="p-2">{u.email}</td>
              <td className="p-2">
                <select
                  value={u.role_id || ''}
                  onChange={(e) => assignRole(u.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="">Select Role</option>
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRoleAssigner;
