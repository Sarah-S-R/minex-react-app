import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src="/img/mountains.png" className="backgroundImage" alt="Background Image" />

      <header className="header" id="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo" id="logo">
              <img src="/icons/minex.png" alt="MinEx Logo" />MinEx
            </Link>
          </div>
          <div className="navbar-right">
            <ul>
              <li><Link to="/login" id="login">Login</Link></li>
              <li><Link to="/signup" id="signup">Signup</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="heroSection">
        <div className="heroContent" id="heroContent">
          <h1>Empower Your Exploration Efforts with MinEx CRM</h1>
          <p>
            Seamlessly manage projects and clients in order to centralize
            your mineral rights portfolio in one unified platform.
          </p>
          <div className="img-container">
            <div className="card">
              <div className="card-inner">
                <h3>MANAGE CLIENTS</h3>
                <span className="material-icons-outlined">groups</span>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>CREATE PROJECTS</h3>
                <span className="material-icons-outlined">inventory_2</span>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>TRACK LOCATIONS</h3>
                <span className="material-icons-outlined">map</span>
              </div>
            </div>
          </div>
          <div className="getStartedBtn">
            <Link to="/signup" id="signup">
              <button className="getStarted" type="button" id="getStarted">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

