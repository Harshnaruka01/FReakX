import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          {product.price !== undefined && (
            <div className="product-price">
              <span className="current-price">₹{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
