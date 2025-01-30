import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "../src/components/Login"; // Import the new LoginComponent
import Dashboard from "../src/components/Dashboard";   // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} /> {/* Login page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
      </Routes>
    </Router>
  );
};

export default App;
