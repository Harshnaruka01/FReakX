import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './FootwearPage.css';

const FootwearPage = () => {
  // Sample footwear data - replace with your actual data
  const footwearItems = [
    { id: 1, name: 'Traditional Jutis', category: 'Footwear', price: 499.00, originalPrice: 799.00, image: '/photos/rajasthani_juti.jpeg' },
    { id: 2, name: 'Embroidered Mojris', category: 'Footwear', price: 599.00, originalPrice: 899.00, image: '/photos/Embroidered_Mojris.jpeg' },
    { id: 3, name: 'Leather Sandals', category: 'Footwear', price: 699.00, originalPrice: 999.00, image: '/photos/Leather_Sandals.jpeg' },
    { id: 4, name: 'Bridal Jutis', category: 'Footwear', price: 899.00, originalPrice: 1299.00, image: '/photos/Bridal_Jutis.jpeg' },
    { id: 5, name: 'Casual Kolhapuris', category: 'Footwear', price: 449.00, originalPrice: 699.00, image: '/photos/combo_outfit.jpeg' },
    { id: 6, name: 'Designer Flats', category: 'Footwear', price: 549.00, originalPrice: 849.00, image: '/photos/ghagra.jpeg' },
  ];

  return (
    <div className="footwear-page">
      <div className="page-header">
        <h1>Footwear Collection</h1>
        <p>Explore our traditional and modern footwear collection</p>
      </div>
      
      <div className="product-grid">
        {footwearItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FootwearPage;
