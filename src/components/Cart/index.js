import React from 'react';
import './index.css';

const Cart = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.disprice, 0);

  return (
    <div className="cart-container-bg">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-each">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.disprice}</p>
                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
