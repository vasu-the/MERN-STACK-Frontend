import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./styles/App.css"
 import "./styles/global.css"
import "./styles/login.css"
import "./styles/dashboard.css";
import "./styles/addAgent.css";
import "./styles/uploadCSV.css"
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/agentTasks.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
