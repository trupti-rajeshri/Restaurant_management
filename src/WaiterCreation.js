import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WaiterCreation.css";

const WaiterCreation = ({ addWaiter, toggleForm }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !mobile || !password) return; // Validation

    const newWaiter = { username, mobile, password };
    addWaiter(newWaiter); // Call function to add waiter

    console.log("Waiter Created:", newWaiter); // Log the created waiter

    // Clear form fields
    setUsername("");
    setMobile("");
    setPassword("");

    if (toggleForm) {
      toggleForm(); // Close the form if toggleForm function exists
    } else {
      navigate("/waiter-list"); // Redirect to Waiter List after submission
    }
  };

  return (
    <div className="form-container">
      <h2>Create Waiter</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Waiter
        </button>
      </form>
    </div>
  );
};

export default WaiterCreation;
