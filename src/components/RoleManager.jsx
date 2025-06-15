import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const RoleManager = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const { data } = await supabase.from('roles').select('*');
    setRoles(data || []);
  };

  const addRole = async () => {
    if (!newRole.trim()) return;

    await supabase.from('roles').insert([{ name: newRole }]);
    setNewRole('');
    fetchRoles();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Roles</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button onClick={addRole} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul className="space-y-1 text-gray-700">
        {roles.map((role) => (
          <li key={role.id}>• {role.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManager;
