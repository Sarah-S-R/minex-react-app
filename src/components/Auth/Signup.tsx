
import React from 'react'
import { Link } from 'react-router-dom';
import PublicHeader from '../Common/PublicHeader';

const Signup = () => {
  const handleSignup = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div>
      <PublicHeader />
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

