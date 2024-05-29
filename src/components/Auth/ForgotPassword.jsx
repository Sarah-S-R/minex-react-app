import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
      <div className="main-reset-body" id="main-reset-body">
        <div className="password-reset-container">
          <form className="reset-password-form" id="reset-password-form" action="./reset-password" method="post">
            <h1 className="pw-reset-form-title">Password Reset</h1>
            <div className="reset-password-input-group">
              <div className="input-group">
                <input type="email" className="input" id="email" name="email" required autoFocus placeholder="Enter email..." />
              </div>
              <div className="input-group">
                <input type="password" className="input" id="current-password" name="current-password" required autoFocus placeholder="Enter current password..." />
              </div>
              <div className="input-group">
                <input type="password" className="input" id="new-password" name="new-password" required autoFocus placeholder="Enter new password..." />
              </div>
              <div className="input-group">
                <input type="password" className="input" id="confirm-password" name="confirm-password" required autoFocus placeholder="Confirm new password..." />
              </div>
              <button type="submit" className="reset-btn">Reset Password</button>
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

export default ForgotPassword;

