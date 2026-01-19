import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getAllCategories } from '../data/productCatalog';
import './CategoryProductsPage.css';

const CategoryProductsPage = () => {
  const { categoryName } = useParams();
  const allCategories = getAllCategories();
  
  // Decode category name from URL (replace hyphens with spaces)
  const decodedCategoryName = decodeURIComponent(categoryName).replace(/-/g, ' ');
  
  // Find the category by matching name
  const category = allCategories.find(cat => 
    cat.name.toLowerCase() === decodedCategoryName.toLowerCase()
  );

  if (!category) {
    return (
      <div className="app-root">
        <Navbar />
        <div className="category-not-found">
          <h2>Category not found</h2>
          <Link to="/" className="back-to-home">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const products = category.items || [];

  return (
    <div className="app-root">
      <Navbar />
      <div className="category-products-page">
        <div className="page-header">
          <h1>{category.name}</h1>
          <p className="category-description">{category.category} - {products.length} products available</p>
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="back-to-home-section">
          <Link to="/" className="back-to-home-btn">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryProductsPage;
