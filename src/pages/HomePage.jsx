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
    { id: 1, name: 'Relaxed Short Full Slee...', category: 'Clothes', price: 45.00, originalPrice: 12.00, image: '/photos/relaxed-short-full-sleeve.jpeg' },
    { id: 2, name: 'Girls Pnk Embro Desig...', category: 'Clothes', price: 61.00, originalPrice: 9.00, image: '/photos/girls-pnk-embro-design.jpeg' },
    { id: 3, name: 'Black Floral Wrap Midi...', category: 'Clothes', price: 76.00, originalPrice: 25.00, image: '/photos/black-floral-wrap-midi.jpeg' },
  ];

  const trending = [
    { id: 4, name: 'Running & Trekking Sh...', category: 'Sports', price: 49.00, originalPrice: 15.00, image: '/photos/running-trekking-shoes.jpeg' },
    { id: 5, name: 'Trekking & Running Sh...', category: 'Sports', price: 78.00, originalPrice: 36.00, image: '/photos/trekking-running-shoes.jpeg' },
    { id: 6, name: 'Womens Party Wear S...', category: 'Party Wear', price: 94.00, originalPrice: 42.00, image: '/photos/womens-party-wear-s.jpeg' },
  ];

  const topRated = [
    { id: 7, name: 'Pocket Watch Leather ...', category: 'Watches', price: 50.00, originalPrice: 94.00, image: '/photos/pocket-watch-leather.jpeg' },
    { id: 8, name: 'Silver Deer Heart Neck...', category: 'Jewellery', price: 84.00, originalPrice: 30.00, image: '/photos/silver-deer-heart-necklace.jpeg' },
    { id: 9, name: 'Titan 100 MI Womens ...', category: 'Perfume', price: 42.00, originalPrice: 10.00, image: '/photos/titan-100-mi-womens.jpeg' },
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
                <h2>New Arrivals</h2>
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
