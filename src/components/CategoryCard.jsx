import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const products = category.items || [];

  if (products.length === 0) return null;

  // Get the first product for initial display
  const firstProduct = products[0];

  // Create URL-friendly category name
  const categoryUrl = category.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="category-card">
      <Link 
        to={`/category/${categoryUrl}`} 
        className="category-card-link"
      >
        <div className="category-header">
          <h3 className="category-name">{category.name}</h3>
          <p className="category-type">{category.category}</p>
        </div>
        
        <div className="category-single-product">
          <div className="single-product-image-wrapper">
            <img 
              src={firstProduct.image} 
              alt={firstProduct.name} 
              className="single-product-image" 
            />
          </div>
          <div className="single-product-info">
            <div className="single-product-name">{firstProduct.name.split(' - ')[1] || firstProduct.name}</div>
            {firstProduct.price && (
              <div className="single-product-price">
                <span className="current-price">₹{firstProduct.price.toFixed(2)}</span>
                {firstProduct.originalPrice && (
                  <span className="original-price">₹{firstProduct.originalPrice.toFixed(2)}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
