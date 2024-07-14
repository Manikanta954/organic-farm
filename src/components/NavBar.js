import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Style your navbar here

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/home">home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
