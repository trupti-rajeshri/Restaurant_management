import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import Navbar from "./Navbar";

const Dashboard = ({ waiters, tables, menus }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleRedirect = (page) => {
    navigate(page);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Navbar />
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-btn" onClick={toggleSidebar}>&#9776;</button> {/* (=) Toggle Button */}
          Dashboard
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/waiter-creation">Waiter Creation</a></li>
          <li><a href="/table-creation">Table Creation</a></li>
          <li><a href="/menu-items">Menu Items</a></li>
          <li><a href="/waiterlogin">Waiter Login</a></li>
        </ul>
      </div>

      <div className="dashboard-report">
        <div className="report-item" onClick={() => handleRedirect("/waiter-list")}>
          <h2>Total Waiters: {waiters.length}</h2>
        </div>
        <div className="report-item" onClick={() => handleRedirect("/table-list")}> 
          <h2>Total Tables: {tables.length}</h2> 
        </div>
        <div className="report-item" onClick={() => handleRedirect("/menu-list")}>
          <h2>Total Menu Items: {menus.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
