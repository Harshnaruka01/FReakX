import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import AnimatedCard from '../components/AnimatedCard';
import './HomePage.css';

const HomePage = () => {
  // Sample product data - replace with your actual data
  const newArrivals = [
    { id: 1, name: 'Mens', category: 'Clothes', price: 450.00, originalPrice: 512.00, image: './photos/GenZ_outfit.jpeg' },
    { id: 2, name: 'Girls', category: 'Clothes', price: 600.00, originalPrice: 799.00, image: './photos/GenZ_outfit_G.jpeg' },
    { id: 3, name: 'Combo Outfit', category: 'Clothes', price: 750.00, originalPrice: 825.00, image: './photos/combo_outfit.jpeg' },
  ];

  const trending = [
    { id: 4, name: 'Rajasthani womens Dress', category: 'clothes', price: 490.00, originalPrice: 515.00, image: '/photos/rajasthani_base.jpeg' },
    { id: 5, name: 'Rajasthani mens Dress', category: 'clothes', price: 780.00, originalPrice: 836.00, image: '/photos/rajasthani_men_dress.jpeg' },
    { id: 6, name: 'Footwear', category: 'Footwear', price: 940.00, originalPrice: 1142.00, image: '/photos/rajasthani_juti.jpeg' },
  ];

  const topRated = [
    { id: 7, name: 'Pocket Watch Leather ...', category: 'Watches', price: 500.00, originalPrice: 694.00, image: '/photos/pocket-watch-leather.jpg' },
    { id: 8, name: 'Silver Deer Heart Neck...', category: 'Jewellery', price: 840.00, originalPrice: 1130.00, image: '/photos/silver-deer-heart-necklace.jpg' },
    { id: 9, name: 'Titan 100 MI Womens ...', category: 'Perfume', price: 420.00, originalPrice: 550.00, image: '/photos/perfume.jpg' },
  ];

  return (
    <div className="app-root">
      <Navbar />
      <main className="container home-page">
        <div className="main-content">
          <AnimatedCard />
          <div className="content-with-sidebar">
            <Sidebar />
            <div className="product-sections-wrapper">
              <section className="product-section">
                <h2>GenZ</h2>
                <div className="product-grid">
                  {newArrivals.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              <section className="product-section">
                <h2>Trending</h2>
                <div className="product-grid">
                  {trending.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              <section className="product-section">
                <h2>Top Rated</h2>
                <div className="product-grid">
                  {topRated.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
