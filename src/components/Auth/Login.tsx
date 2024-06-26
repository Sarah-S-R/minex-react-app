import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';
import PublicHeader from '../Common/PublicHeader';

const Login = () => {

  const { setUserName } = useAuth()
  const [ email, setEmail ] = useState("")

  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setUserName(email)
    navigate('/dashboard');
  };

  return (
    <div>
      
      <PublicHeader />

      <div className="main-login-body" id="main-login-body">
        <div className="login-container" id="login-container">
          <form onSubmit={handleLogin} className="login-form" id="login-form">
            <h1 className="login-form-title">Login to your Account</h1>
            <span className="error-message"></span>
            <div className="input-group">
              <span></span>
              <input 
                type="text" 
                className="input" 
                id="email"
                value={email}
                onChange={
                  (e) => {
                    setEmail(e.target.value)
                  }
                }
                placeholder="Enter email..." 
                autoComplete="email" 
                required 
              />
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
              <Link to="/forgot-password">Reset password?</Link>
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




