import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };

  if (cartItems.length === 0) {
    return (
      <div className="app-root">
        <Navbar />
        <div className="cart-page">
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>

          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`} className="cart-item-image-link">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Link>
                  <div className="cart-item-info">
                    <Link to={`/product/${item.id}`} className="cart-item-name">
                      {item.name}
                    </Link>
                    <p className="cart-item-category">{item.category}</p>
                    {item.price && (
                      <div className="cart-item-price">
                        <span className="price">₹{item.price.toFixed(2)}</span>
                        {item.originalPrice && (
                          <span className="original-price">₹{item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="cart-item-quantity">
                    <label htmlFor={`quantity-${item.id}`}>Qty:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-input"
                    />
                  </div>
                  <div className="cart-item-total">
                    <span className="item-total">
                      ₹{((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-item-btn"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)} items):</span>
                <span className="summary-value">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span className="summary-value">Free</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total:</span>
                <span className="summary-value">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
              <Link to="/" className="continue-shopping-link">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
