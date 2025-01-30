import React, { useState } from 'react';
import axios from 'axios';

function AddAgent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAddAgent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/agents',
        { name, email, mobile, password },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Agent added successfully');
    } catch (err) {
      setError('Error adding agent');
    }
  };

  return (
    <div>
      <h2>Add Agent</h2>
      <form onSubmit={handleAddAgent}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Add Agent</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default AddAgent;
