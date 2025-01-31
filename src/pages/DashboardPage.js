// import React from 'react';

// const DashboardPage = () => {
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     window.location.href = '/';
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <a href="/add-agent">Add Agent</a>
//       <a href="/upload-csv">Upload CSV</a>
//     </div>
//   );
// };

// export default DashboardPage;
// import React from 'react';
// // import './dashboard.css';

// const DashboardPage = () => {
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     window.location.href = '/';
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>
//       {/* <button className="logout-button" onClick={handleLogout}>
//         Logout
//       </button> */}
//       <div className="dashboard-links">
//         <a href="/add-agent">Add Agent</a>
//         <a href="/upload-csv">Upload CSV</a>
//       </div>
//     </div>
//   );
// };

// // export default DashboardPage;
// import React from 'react';
// // import './styles/dashboard.css';

// const DashboardPage = () => {
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     window.location.href = '/';
//   };

//   return (
//     <div className="dashboard-container">
//       <h1>Dashboard</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <a href="/add-agent">Add Agent</a>
//       <a herf="/tasks">Tasks</a>
//       <a href="/upload">Upload CSV</a>
//     </div>
//   );
// };

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
        <a href="/add-agent">Add Agent</a>
        <a href="/upload">Upload CSV</a>
        <a href="/agent-task-distribution">Agent Task </a> {/* Link to AgentTaskDistribution */}
      </div>
    </div>
  );
};

export default DashboardPage;

