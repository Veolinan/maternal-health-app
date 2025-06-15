// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
import './index.css'; // Ensure you have Tailwind CSS imported
import './tailwind.css'; // Import your Tailwind CSS file if you have a separate one