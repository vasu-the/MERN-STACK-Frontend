import React, { useState } from 'react';
import API from '../utils/api';

const AddAgentPage = () => {
  const [agent, setAgent] = useState({ name: '', email: '', mobileNumber: '', password: '' });
  const [loading, setLoading] = useState(false); // Indicates loading state
  const [error, setError] = useState(''); // Displays error messages
  const [success, setSuccess] = useState(''); // Displays success messages

  const handleAddAgent = async () => {
    // Reset error and success messages
    setError('');
    setSuccess('');

    // Validate input fields
    if (!agent.name || !agent.email || !agent.mobileNumber || !agent.password) {
      setError('All fields are required.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(agent.email)) {
      setError('Invalid email format.');
      return;
    }

    if (!/^\+\d{1,3}\d{10}$/.test(agent.mobileNumber)) {
      setError('Invalid mobile number format. Use +<country_code><10_digit_number>.');
      return;
    }

    if (agent.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true); // Show loading state
    try {
      const response = await API.post('/add-agent', agent);
      setSuccess('Agent added successfully!');
      setAgent({ name: '', email: '', mobileNumber: '', password: '' }); // Clear form fields
    } catch (err) {
      // Handle API errors
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Failed to add agent. Please try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add-agent-container">
      <h1>Add Agent</h1>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <input
        type="text"
        placeholder="Name"
        value={agent.name}
        onChange={(e) => setAgent({ ...agent, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={agent.email}
        onChange={(e) => setAgent({ ...agent, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile Number (+<country_code><10_digit_number>)"
        value={agent.mobileNumber}
        onChange={(e) => setAgent({ ...agent, mobileNumber: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={agent.password}
        onChange={(e) => setAgent({ ...agent, password: e.target.value })}
      />
      <button onClick={handleAddAgent} disabled={loading}>
        {loading ? 'Adding...' : 'Add Agent'}
      </button>
    </div>
  );
};

export default AddAgentPage;


