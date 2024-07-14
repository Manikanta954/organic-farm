import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import MUI icon for cart
import './Navbar.css';

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav className="navbar">
      <div className="logo" >
      Organic Farm
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">
            <ShoppingCartIcon /> {/* Display cart icon */}
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>} {/* Display count if > 0 */}
          </Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
