// TableList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TableList.css";

const TableList = ({ tables }) => {
  const navigate = useNavigate();

  return (
    <div className="table-list-container">
      <h2>Table List</h2>
      <button onClick={() => navigate("/")}>Back to Dashboard</button>
      <table className="table-list">
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Seat Status</th>
          </tr>
        </thead>
        <tbody>
          {tables.length === 0 ? (
            <tr>
              <td colSpan="2">No tables available</td>
            </tr>
          ) : (
            tables.map((table, index) => (
              <tr key={index}>
                <td>{table.tableNumber}</td>
                <td>{table.tableSeat}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;