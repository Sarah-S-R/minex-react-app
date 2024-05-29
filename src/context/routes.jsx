// src/context/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Projects from '../components/Dashboard/Projects';
import Clients from '../components/Dashboard/Clients';
import Signup from '../components/Auth/Signup';
import Locations from '../components/Dashboard/Locations';
import Profile from '../components/Dashboard/Profile';
import ForgotPassword from '../components/Auth/ForgotPassword';
import Properties from '../components/Dashboard/Properties';
import Sidebar from '../components/Common/Sidebar';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';


const AppRoutes = () => (
  <Router>
    <Header />
    <Sidebar />
    <div className="main-content">
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
    </div>
    <Footer />
  </Router>
);

export default AppRoutes;
