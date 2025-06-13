import React from 'react';
import { Toaster } from 'react-hot-toast';

const App = ({ children }) => {
  return (
    <>
      {/* Notifications */}
      <Toaster position="top-right" />
      
      {/* Main content passed from router */}
      {children}
    </>
  );
};

export default App;
