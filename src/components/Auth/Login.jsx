import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/style.css';  // Adjust the path as necessary

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    // Example: navigate('/dashboard');
  };

  return (
    <div>
      <header className="header" id="header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo" id="logo">
              <img src="./icons/minex.png" alt="MinEx Logo" /> MinEx
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
      <div className="main-login-body" id="main-login-body">
        <div className="login-container" id="login-container">
          <form onSubmit={handleLogin} className="login-form" id="login-form">
            <h1 className="login-form-title">Login to your Account</h1>
            <span className="error-message"></span>
            <div className="input-group">
              <span></span>
              <input type="text" className="input" id="email" placeholder="Enter email..." autoComplete="email" required />
              <span className="error-message"></span>
            </div>
            <div className="input-group">
              <span></span>
              <input type="password" className="input" id="password" placeholder="Enter password..." autoComplete="current-password" required />
              <span className="error-message"></span>
            </div>
            <button type="submit" className="login-btn" id="login-btn">Login</button>
            <div className="remember-forgot">
              <label><input type="checkbox" id="rememberMe" /> Remember me</label>
              <Link to="/forgotPassword">Reset password?</Link>
            </div>
            <div className="register-link">
              <Link to="/signup" className="login-form-link" id="login-form-reg-link">Create account</Link>
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

export default Login;


