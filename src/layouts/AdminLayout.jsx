import React from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
