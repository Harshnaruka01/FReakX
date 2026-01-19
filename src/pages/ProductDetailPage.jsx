import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/productCatalog';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          {product.price && (
            <div className="product-price-section">
              <span className="product-price">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="product-original-price">₹{product.originalPrice.toFixed(2)}</span>
              )}
              {product.originalPrice && (
                <span className="product-discount">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
          )}
          <p className="product-description">{product.description}</p>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>

          <button 
            className={`add-to-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
          
          <div className="product-actions">
            <Link to="/cart" className="view-cart-link">View Cart</Link>
          <Link to="/" className="back-to-shop">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
