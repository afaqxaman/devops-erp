import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '50px 40px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.4)'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '60px', height: '60px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            marginBottom: '16px'
          }}>🚀</div>
          <h1 style={{ margin: 0, fontSize: '26px', fontWeight: '700', color: '#1a1a2e' }}>
            DEVOPS ERP
          </h1>
          <p style={{ margin: '6px 0 0', color: '#888', fontSize: '14px' }}>
            Enterprise Resource Planning System
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            background: '#fff5f5', border: '1px solid #feb2b2',
            borderRadius: '8px', padding: '10px 14px',
            color: '#c53030', fontSize: '14px', marginBottom: '16px'
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="admin@erp.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '12px 14px',
              border: '1.5px solid #e2e8f0', borderRadius: '8px',
              fontSize: '15px', outline: 'none', boxSizing: 'border-box',
              transition: 'border 0.2s'
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '6px' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%', padding: '12px 14px',
              border: '1.5px solid #e2e8f0', borderRadius: '8px',
              fontSize: '15px', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          style={{
            width: '100%', padding: '13px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white', border: 'none', borderRadius: '8px',
            fontSize: '16px', fontWeight: '600', cursor: 'pointer',
            letterSpacing: '0.5px'
          }}
        >
          Sign In →
        </button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#aaa' }}>
          © 2026 DEVOPS ERP. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;