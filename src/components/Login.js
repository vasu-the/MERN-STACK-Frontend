

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook for page redirection
import "./Login.css";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle invalid login error
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating the login check (replace this with real logic)
    const validCredentials = {
      email: "admin@example.com",
      password: "admin123",
    };

    // Check if email and password match
    if (email === validCredentials.email && password === validCredentials.password) {
      // Navigate to dashboard if credentials are valid
      navigate("/dashboard");
    } else {
      // Show error message if credentials are invalid
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>} {/* Show error message if credentials are invalid */}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;

