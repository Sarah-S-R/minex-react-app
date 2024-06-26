
import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSignup = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div>
      <header className="header" id="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo" id="logo">
              <img src="/icons/minex.png" alt="MinEx Logo" /> MinEx
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
      <div className="main-signup-body" id="main-signup-body">
        <div className="signup-container" id="signup-container">
          <form onSubmit={handleSignup} className="signup-form" id="signup-form">
            <h1 className="signup-form-title">Create your Account</h1>
            <div className="input-group">
              <input type="text" className="input" id="username" placeholder="Enter username..." required />
            </div>
            <div className="input-group">
              <input type="email" className="input" id="email" placeholder="Enter email..." required />
            </div>
            <div className="input-group">
              <input type="password" className="input" id="password" placeholder="Enter password..." required />
            </div>
            <div className="input-group">
              <input type="password" className="input" id="confirm-password" placeholder="Confirm password..." required />
            </div>
            <button type="submit" className="signup-btn" id="signup-btn">Signup</button>
            <div className="login-link">
              <span>Already have an account? </span>
              <Link to="/login" className="signup-form-link" id="signup-form-login-link">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer" id="footer">
        <div className="socialIcons" id="socialIcons">
          {/* Copyright © MinEX 2023. All Rights Reserved. */}
        </div>
      </footer>
    </div>
  );
};

export default Signup;

