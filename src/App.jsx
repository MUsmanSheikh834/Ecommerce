import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Checkout from "./Checkout";
import './App.css'; // Make sure this is imported

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
          </div>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
