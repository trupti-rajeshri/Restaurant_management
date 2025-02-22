import React from "react";
import "./WaiterLogin.css"; // Ensure this is correctly imported

const WaiterLogin = () => {
  return (
    <div className="waiter-form-container">
      <form className="waiter-form">
        <h2>Waiter Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
  );
};

export default WaiterLogin;
