import React, { useState } from 'react';
import API from '../utils/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await API.post('/login', { email, password });
      localStorage.setItem('authToken', data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Invalid credentials or server error');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1> {/* Added "Welcome Back" heading */}
      <p>Please login to your account</p> {/* Added "Please login to your account" message */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default LoginPage;

