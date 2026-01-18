import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

// Sample product data - in a real app, you would fetch this from an API
const sampleProducts = [
  { id: 1, name: 'Casual Shirt', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 899.00, originalPrice: 1299.00, description: 'Comfortable and stylish casual shirt for men.' },
  { id: 2, name: 'Straight Fit Jeans', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Classic denim jeans for a perfect fit.' },
  { id: 3, name: 'Sports Shoes', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 2499.00, originalPrice: 3499.00, description: 'High-performance sports shoes for men.' },
  { id: 4, name: 'Summer Dress', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Light and comfortable summer dress.' },
  { id: 5, name: 'Designer Handbag', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1999.00, originalPrice: 2999.00, description: 'Elegant handbag for any occasion.' },
  { id: 6, name: 'Casual Sandals', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 799.00, originalPrice: 1199.00, description: 'Stylish sandals for women.' },
  { id: 7, name: 'Rajasthani Lehenga', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499.00, originalPrice: 4999.00, description: 'Traditional Rajasthani dress for women.' },
  { id: 8, name: 'Traditional Jutis', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 499.00, originalPrice: 799.00, description: 'Traditional Rajasthani juttis.' },
  { id: 9, name: 'Formal Shirt', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 1099.00, originalPrice: 1499.00, description: 'Professional formal shirt for men.' },
  { id: 10, name: 'Evening Gown', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant evening gown for special occasions.' },
  { id: 11, name: 'Clutch Purse', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish clutch purse for evening events.' },
  { id: 12, name: 'Heeled Sandals', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1199.00, originalPrice: 1699.00, description: 'Comfortable heeled sandals for women.' },
  { id: 13, name: 'Men\'s Kurta Set', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 1999.00, originalPrice: 2799.00, description: 'Traditional kurta set for men.' },
  { id: 14, name: 'Rajasthani Jewelry', category: 'Jewelry', image: '/photos/Rajasthani_jewelry.jpeg', price: 2499.00, originalPrice: 3499.00, description: 'Traditional Rajasthani jewelry set.' },
  { id: 15, name: 'Embroidered Mojris', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 599.00, originalPrice: 899.00, description: 'Beautiful embroidered mojris.' },
  { id: 16, name: 'Leather Watch', category: 'Accessories', image: '/photos/Leather_Watch.jpeg', price: 1799.00, originalPrice: 2499.00, description: 'Classic leather watch for men.' },
  { id: 17, name: 'Silver Necklace', category: 'Jewelry', image: '/photos/silver-deer-heart-necklace.jpg', price: 2999.00, originalPrice: 3999.00, description: 'Elegant silver deer heart necklace.' },
  { id: 18, name: 'Premium Perfume', category: 'Fragrance', image: '/photos/Premium_Perfume.jpeg', price: 899.00, originalPrice: 1299.00, description: 'Premium fragrance for all occasions.' },
  { id: 19, name: 'Sunglasses', category: 'Accessories', image: '/photos/Sunglasses.jpeg', price: 599.00, originalPrice: 899.00, description: 'Stylish sunglasses for protection and style.' },
  { id: 20, name: 'Ring', category: 'Jewelry', image: '/photos/Ring.jpeg', price: 1299.00, originalPrice: 1799.00, description: 'Beautiful ring for special occasions.' },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = sampleProducts.find(p => p.id === parseInt(productId));

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
