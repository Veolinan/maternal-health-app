import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const PermissionManager = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPerm, setNewPerm] = useState('');

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    const { data } = await supabase.from('permissions').select('*');
    setPermissions(data || []);
  };

  const addPermission = async () => {
    if (!newPerm.trim()) return;

    await supabase.from('permissions').insert([{ name: newPerm }]);
    setNewPerm('');
    fetchPermissions();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Permissions</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New Permission"
          value={newPerm}
          onChange={(e) => setNewPerm(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button onClick={addPermission} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul className="space-y-1 text-gray-700">
        {permissions.map((p) => (
          <li key={p.id}>• {p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManager;
