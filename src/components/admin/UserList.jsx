import { useEffect, useState } from 'react';
import RoleBadge from './RoleBadge';
import DeleteUserButton from './DeleteUserButton';
import SendLoginDetailsButton from './SendLoginDetailsButton';
import UserEditModal from './UserEditModal';
import { userService } from '../../features/users/userService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetch = async () => setUsers(await userService.getAllUsers());

  useEffect(() => { fetch(); }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-100"><tr>
          {['Name','Email','Role','Actions'].map(h => <th key={h} className="p-2 text-left">{h}</th>)}
        </tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.full_name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2"><RoleBadge role={u.role} /></td>
              <td className="p-2 space-x-2">
                <button onClick={() => setEditing(u)} className="text-blue-600 hover:underline">Edit</button>
                <SendLoginDetailsButton email={u.email} />
                <DeleteUserButton userId={u.id} onDeleted={fetch} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing && (
        <UserEditModal
          isOpen={!!editing}
          user={editing}
          onClose={() => setEditing(null)}
          onSaved={fetch}
        />
      )}
    </div>
  );
};

export default UserList;