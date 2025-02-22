// WaiterList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WaiterList.css";

const WaiterList = ({ waiters }) => {
  const navigate = useNavigate();

  return (
    <div className="list-container">
      <h2>Waiter List</h2>
      <button className="back-btn" onClick={() => navigate("/")}>Back to Dashboard</button>
      <table className="waiter-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Mobile</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {waiters.length === 0 ? (
            <tr>
              <td colSpan="3">No waiters added yet.</td>
            </tr>
          ) : (
            waiters.map((waiter, index) => (
              <tr key={index}>
                <td>{waiter.username}</td>
                <td>{waiter.mobile}</td>
                <td>{waiter.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WaiterList;