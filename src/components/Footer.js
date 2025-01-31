import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Admin Dashboard. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
