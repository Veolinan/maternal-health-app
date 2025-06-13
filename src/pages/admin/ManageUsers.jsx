import React from 'react';
import UserList from '../../components/admin/UserList';
import UserRegistrationForm from '../../components/admin/UserRegistrationForm';
import AdminLayout from '../../layouts/AdminLayout';

const ManageUsers = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <UserList />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Register New User</h2>
          <UserRegistrationForm />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;
