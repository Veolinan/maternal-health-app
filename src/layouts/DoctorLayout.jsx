import React from 'react';
import DoctorSidebar from '../components/doctor/DoctorSidebar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const DoctorLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DoctorSidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default DoctorLayout;
