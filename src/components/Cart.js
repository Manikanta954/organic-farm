import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to Home</Link></p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="buy-button">Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
