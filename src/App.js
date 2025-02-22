import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import WaiterCreation from './WaiterCreation';
import WaiterList from './WaiterList';
import TableCreation from './TableCreation';
import MenuItems from './MenuItems';
import MenuList from './MenuList';
import TableList from './TableList';

function WaiterLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('All fields are required');
            return;
        }
        if (email === 'waiter@example.com' && password === 'password123') {
            navigate('/waiterpage');
        } else {
            setError('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Waiter Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function WaiterPage() {
    const [customerName, setCustomerName] = useState('');
    const [mobile, setMobile] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [status, setStatus] = useState('Pending');
    const [totalPrice, setTotalPrice] = useState(0);

    const handleGenerateImage = () => {
        alert('Image Generated!');
    };

    return (
        <div className="waiter-page">
            <h2>Waiter Page</h2>
            <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <select value={item} onChange={(e) => setItem(e.target.value)}>
                <option value="">Select Item</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Pasta">Pasta</option>
            </select>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Ready">Ready</option>
            </select>
            <input type="number" placeholder="Total Price" value={totalPrice} onChange={(e) => setTotalPrice(Number(e.target.value))} />
            <button onClick={handleGenerateImage}>Generate Image</button>
        </div>
    );
}

const App = () => {
    const [waiters, setWaiters] = useState([]);
    const [tables, setTables] = useState([]);
    const [menus, setMenus] = useState([]);

    const addMenuItem = (newItem) => {
        setMenus([...menus, newItem]);  
        console.log("Menu Item Added:", newItem);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard waiters={waiters} tables={tables} menus={menus} />} />
                <Route path="/waiter" element={<Navigate to="/waiterlogin" />} />
                <Route path="/waiter-creation" element={<WaiterCreation addWaiter={(newWaiter) => setWaiters([...waiters, newWaiter])} />} />
                <Route path="/waiter-list" element={<WaiterList waiters={waiters} />} />
                <Route path="/table-creation" element={<TableCreation addTable={(newTable) => setTables([...tables, newTable])} />} />
                <Route path="/menu-list" element={<MenuList menus={menus} />} />
                <Route path="/add-menu" element={<MenuItems addMenuItem={addMenuItem} />} />
                <Route path="/table-list" element={<TableList tables={tables} />} />
                <Route path="/menu-items" element={<MenuItems addMenuItem={addMenuItem} />} />
                <Route path="/waiterlogin" element={<WaiterLogin />} />
                <Route path="/waiterpage" element={<WaiterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
