// import React, { useState } from 'react';
// import '../styles/login.css';
// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (email === 'admin@example.com' && password === 'password') {
//       localStorage.setItem('authToken', 'fakeToken');
//       window.location.href = '/dashboard';
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Login</h1>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;

// const LoginPage = () => {
//   const [email, setEmail] = useState(''); // State for email input
//   const [password, setPassword] = useState(''); // State for password input

//   // Function to handle login
//   const handleLogin = () => {
//     // Simple check for static credentials
//     if (email === 'admin@example.com' && password === 'password') {
//       localStorage.setItem('authToken', 'fakeToken'); // Store a fake token
//       window.location.href = '/dashboard'; // Redirect to the dashboard
//     } else {
//       alert('Invalid credentials'); // Display error for invalid login
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Admin Login</h1>
//       {/* Email Input */}
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       {/* Password Input */}
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       {/* Login Button */}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import API from '../utils/api';
// // import './styles/login.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const { data } = await API.post('/login', { email, password });
//       localStorage.setItem('authToken', data.token);
//       window.location.href = '/dashboard';
//     } catch (error) {
//       alert('Invalid credentials or server error');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Admin Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

import React, { useState } from 'react';
import API from '../utils/api';
// import './styles/login.css';

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

