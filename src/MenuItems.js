// MenuItems.js
import React, { useState } from 'react';
import './MenuItems.css';

const MenuItems = () => {
  const [menuName, setMenuName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);
  const [image, setImage] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Menu Item Created:', { menuName, category, price, available, image, prepTime });
    // Handle menu item creation logic here
  };

  return (
    <div className="form-container">
      <h2>Create Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="menu-name">Menu Name:</label>
          <input
            type="text"
            id="menu-name"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="pasta">Pasta</option>
            <option value="cold drinks">Cold Drinks</option>
            <option value="pastries">Pastries</option>
            <option value="meggie">Meggie</option>
            <option value="sandwich">Sandwich</option>
            <option value="waffles">Waffles</option>
            <option value="hotdog">Hotdog</option>
            <option value="snacks">Snacks</option>
            <option value="wrap">Wrap</option>
            <option value="paratha">Paratha</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="available">Available:</label>
          <input
            type="checkbox"
            id="available"
            checked={available}
            onChange={() => setAvailable(!available)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="input-group">
          <label htmlFor="prep-time">Preparation Time:</label>
          <input
            type="text"
            id="prep-time"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Menu Item</button>
      </form>
    </div>
  );
};

export default MenuItems;
