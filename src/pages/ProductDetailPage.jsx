import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

// Sample product data - in a real app, you would fetch this from an API
const sampleProducts = [
  { id: 1, name: 'Casual Shirt', category: 'Men\'s Fashion', image: '/photos/mens_shirt.jpg', description: 'Comfortable and stylish casual shirt for men.' },
  { id: 2, name: 'Denim Jeans', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpg', description: 'Classic denim jeans for a perfect fit.' },
  { id: 3, name: 'Sports Shoes', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpg', description: 'High-performance sports shoes for men.' },
  { id: 4, name: 'Summer Dress', category: 'Women\'s Fashion', image: '/photos/womens_dress.jpg', description: 'Light and comfortable summer dress.' },
  { id: 5, name: 'Handbag', category: 'Women\'s Accessories', image: '/photos/womens_bag.jpg', description: 'Elegant handbag for any occasion.' },
  { id: 6, name: 'Sandals', category: 'Women\'s Footwear', image: '/photos/womens_shoes.jpg', description: 'Stylish sandals for women.' },
  { id: 7, name: 'Rajasthani Dress', category: 'Traditional', image: '/photos/rajasthani_base.jpeg', description: 'Traditional Rajasthani dress for women.' },
  { id: 8, name: 'Rajasthani Juti', category: 'Traditional', image: '/photos/rajasthani_juti.jpeg', description: 'Traditional Rajasthani juttis.' },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
          <Link to="/" className="back-to-shop">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
