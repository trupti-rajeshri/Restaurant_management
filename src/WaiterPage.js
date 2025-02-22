import React from 'react';
import './WaiterPage.css'; // Ensure this is imported

const WaiterPage = () => {
  return (
    <div className="waiter-form-container">
      <form className="waiter-form">
        <h2>Waiter Page</h2>
        <input type="text" placeholder="Customer Name" required />
        <input type="number" placeholder="Mobile Number" required />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default WaiterPage;
