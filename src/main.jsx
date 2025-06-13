import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './styles/tailwind.css';

console.log('main.jsx loading');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
