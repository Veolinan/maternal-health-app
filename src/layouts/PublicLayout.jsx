import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 p-6 container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
