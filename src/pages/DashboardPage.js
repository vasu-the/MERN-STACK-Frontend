import React from 'react';

const DashboardPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {/* <button onClick={handleLogout}>Logout</button> */}

      <div className="dashboard-links">
        <a href="/add-agent">Add Agent</a>   {/* Link to Add Agent */}
        <a href="/upload">Upload CSV</a>   {/* Link to Upload CSV */}
        <a href="/agent-task-distribution">Agent Task </a> {/* Link to AgentTaskDistribution */}
      </div>
    </div>
  );
};

export default DashboardPage;

