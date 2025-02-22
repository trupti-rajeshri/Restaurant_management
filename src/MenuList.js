/* MenuList.js */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuList.css";

const MenuList = ({ menus }) => {
  const navigate = useNavigate();

  return (
    <div className="menu-list">
      <h2>Menu Items List</h2>
      <button onClick={() => navigate("/add-menu")}>Add New Item</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Preparation Time</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu, index) => (
            <tr key={index}>
              <td>{menu.menuName}</td>
              <td>{menu.category}</td>
              <td>{menu.price}</td>
              <td>{menu.available}</td>
              <td>{menu.prepTime} mins</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuList;