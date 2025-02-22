import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/waiter-creation">Waiter Creation</Link>
        <Link to="/table-creation">Table Creation</Link>
        <Link to="/menu-items">Menu Items</Link>
        <Link to="/waiter">Waiter Login</Link>
      </div>
      <div className="navbar-right">
        <h1>Restaurant Management</h1>
      </div>
    </nav>
  );
};

export default Navbar;
