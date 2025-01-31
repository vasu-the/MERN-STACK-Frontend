import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Admin Dashboard</h1>
      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/add-agent">Add Agent</a>
        <a href="/upload-csv">Upload CSV</a>
      </nav>
    </header>
  );
};

export default Header;
