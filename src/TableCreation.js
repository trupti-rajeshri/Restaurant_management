import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TableCreation.css';

const TableCreation = ({ addTable }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [tableSeat, setTableSeat] = useState('Reserved');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTable = { tableNumber, tableSeat };
    addTable(newTable); // Add new table

    console.log('Table Created:', newTable); // Log the created table

    // Clear form fields
    setTableNumber('');
    setTableSeat('Reserved');

    navigate('/'); // Redirect back to Dashboard
  };

  return (
    <div className="form-container">
      <h2>Create Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="table-number">Table Number:</label>
          <input
            type="text"
            id="table-number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="table-seat">Table Seat:</label>
          <select
            id="table-seat"
            value={tableSeat}
            onChange={(e) => setTableSeat(e.target.value)}
            required
          >
            <option value="Reserved">Reserved</option>
            <option value="Not">Not</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Table</button>
      </form>
    </div>
  );
};

export default TableCreation;
