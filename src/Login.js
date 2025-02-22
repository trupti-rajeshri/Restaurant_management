import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted with', { email, password });
    navigate('/dashboard');  // Redirect to dashboard after login
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to sign-up page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LogIn</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
          </div>
        </div>

        <div className="form-footer">
          <a href="#" className="forgot-password">Forgot username/password?</a>
          <button type="submit" className="login-btn">Login</button>
        </div>

        <div className="signup-link">
          Don't have an account? <a href="#" onClick={handleSignUp}>Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
