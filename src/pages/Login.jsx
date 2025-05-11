import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
      alert(data.message);
      // Redirect to dashboard or home page
    } else {
      setError(data.message);
      if (data.message.includes('register')) {
        setShowRegister(true);
      }
    }
  } catch (err) {
    setError('Server error. Try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {showRegister && (
          <button
            type="button"
            className="register-button"
            onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        )}

        {/* Always visible Sign Up button */}
        {/* <button
          type="button"
          className="signup-button"
          onClick={() => navigate('/register')}
        >
          Sign Up
        </button> */}
      </form>
    </div>
  );
}

export default Login;
