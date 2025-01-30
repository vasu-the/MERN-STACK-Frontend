import React from 'react';
import { useLocation } from 'react-router-dom'; // To access the location (user data)

const Dashboard = () => {
  const location = useLocation(); // Get the data passed during redirect
  const { email, username } = location.state || {}; // Destructure email and username

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {email && username ? (
        <div>
          <p>Email: {email}</p>
          <p>Username: {username}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Dashboard;
