import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import './NavBar.css';

const Navbar = ({ user }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="company-name">Organic Farm</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {user && <li><button onClick={handleLogout} className="logout-button">Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
