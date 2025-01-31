import React, { useEffect, useState } from 'react';
import API from '../utils/api'; // Assuming Axios instance is in api.js

const AgentTaskDistribution = () => {
  const [agents, setAgents] = useState([]); // Stores list of agents
  const [tasks, setTasks] = useState([]); // Stores tasks for the selected agent
  const [selectedAgentId, setSelectedAgentId] = useState(''); // To hold selected agent's ID
  const [agentIdInput, setAgentIdInput] = useState(''); // To hold manually entered agent ID
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  // Fetch agents and tasks when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch agents data
        const response = await API.get('/get-all-agents');  // Adjust the endpoint based on your API response
        console.log('Fetched agents:', response.data); // Debugging: Check if agents are fetched
        setAgents(response.data.data); // Store the list of agents in the state

        // Fetch tasks for the first agent if there are any agents
        if (response.data.data.length > 0) {
          const agentId = response.data.data[0]._id; // Get the first agent's ID
          setSelectedAgentId(agentId); // Set it as the selected agent
          const taskResponse = await API.get(`/agent/${agentId}`);  // Fetch tasks for this agent
          console.log('Fetched tasks:', taskResponse.data); // Debugging: Check if tasks are fetched
          setTasks(taskResponse.data.data);  // Store tasks data for the selected agent
        }
      } catch (error) {
        console.error('Error fetching agents or tasks:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when component mounts

  // Fetch tasks for selected agent by ID
  const fetchTasksForAgent = async (agentId) => {
    setLoading(true); // Set loading to true before fetching data
    try {
      console.log(`Fetching tasks for agent ID: ${agentId}`); // Debugging log
      const taskResponse = await API.get(`/agent/${agentId}`);  // Adjust the endpoint for your API
      console.log('Task API Response:', taskResponse.data); // Debugging log
      setTasks(taskResponse.data.data);  // Store tasks data for the selected agent
      setError(null); // Reset error state if tasks are fetched successfully
    } catch (error) {
      console.error('Error fetching tasks for selected agent:', error);
      setError('Failed to load tasks. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Handle agent ID input change
  const handleAgentIdInputChange = (event) => {
    setAgentIdInput(event.target.value); // Update the agent ID input value
  };

  // Handle manual submit of agent ID
  const handleAgentIdSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    if (agentIdInput) {
      setSelectedAgentId(agentIdInput);  // Update selected agent ID in state
      fetchTasksForAgent(agentIdInput);  // Fetch tasks for the manually entered agent ID
    }
  };

  // Render task details for the selected agent
  const renderTaskDetails = (task) => (
    <div key={task._id} className="task-details-card">
      <h4>Task ID: {task._id}</h4>
      <div className="task-details">
        <div className="task-detail">
          <strong>Description: </strong>
          <span>{task.description}</span>
        </div>
        <div className="task-detail">
          <strong>Assigned Date: </strong>
          <span>{task.assignedDate}</span>
        </div>
        <div className="task-detail">
          <strong>Due Date: </strong>
          <span>{task.dueDate}</span>
        </div>
        <div className="task-detail">
          <strong>Status: </strong>
          <span>{task.status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="agent-task-distribution">
      <h2>Agent Task Distribution</h2>

      {/* Manual Agent ID Search */}
      <div className="agent-id-search">
        <input
          type="text"
          value={agentIdInput}
          onChange={handleAgentIdInputChange}
          placeholder="Enter Agent ID"
        />
        <button onClick={handleAgentIdSubmit}>Search Agent</button>
      </div>

      {/* Display List of Agents in Cards */}
      <div className="agents-list">
        <h3>Available Agents</h3>
        <div className="agents-cards">
          {agents.map((agent) => (
            <div key={agent._id} className="agent-card">
              <div className="card-header">
                <label>Name:</label>
                <strong>{agent.name}</strong>
              </div>
              <div className="card-body">
                <div className="column">
                  <label>Email:</label>
                  <span>{agent.email}</span>
                </div>
                <div className="column">
                  <label>Phone Number:</label>
                  <span>{agent.mobileNumber}</span>
                </div>
                <button onClick={() => fetchTasksForAgent(agent._id)}>View Tasks</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Tasks for Selected Agent */}
      <div className="agent-task-details">
        <h3>Task Details for Agent {selectedAgentId}</h3>
        {loading && <p>Loading tasks...</p>}
        {error && <p className="error-message">{error}</p>}

        {tasks.length > 0 ? (
          <div className="task-list">
            {tasks.map(renderTaskDetails)}
          </div>
        ) : (
          <p>No tasks assigned to this agent.</p>
        )}
      </div>
    </div>
  );
};

export default AgentTaskDistribution;
