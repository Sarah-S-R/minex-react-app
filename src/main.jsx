// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.css';
import AuthProvider from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


