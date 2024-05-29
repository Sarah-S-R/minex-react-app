import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import Profile from './Dashboard/Profile';
import Locations from './Dashboard/Locations';
import Clients from './Dashboard/Clients';
import Projects from './Dashboard/Projects';
import Dashboard from './Dashboard/Dashboard';
import Properties from './Dashboard/Properties';
import Sidebar from './components/Common/Sidebar';
import Header from './components/Common/Header'; 
import Footer from './components/Common/Footer';
import './styles/dashstyles.css';
import './styles/Home.css';
import './styles/index.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;











