// src/routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Projects from './components/Projects';
import Clients from './components/Clients/Clients';
import Signup from './components/Auth/Signup';
import Locations from './components/Locations/Locations';
import Profile from './components/Profile/Profile';
import ForgotPassword from './components/Auth/ForgotPassword';
import Properties from './components/Properties/Properties';
import Header from './components/Common/Header';

const AppRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  </Router>
);

export default AppRoutes;
