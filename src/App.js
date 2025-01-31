import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AddAgentPage from './pages/AddAgentPage';
import UploadCSVPage from './pages/UploadCSVPage';
import PrivateRoute from './routes/PrivateRoute';
import AgentTaskDistribution from './pages/AgentTaskDistribution';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/add-agent" element={<PrivateRoute><AddAgentPage /></PrivateRoute>} />
        <Route path="/upload" element={<PrivateRoute><UploadCSVPage /></PrivateRoute>} />
        <Route path="/agent-task-distribution" element={<PrivateRoute><AgentTaskDistribution /></PrivateRoute>} />
    
      </Routes>
    </Router>
  );
}

export default App;
