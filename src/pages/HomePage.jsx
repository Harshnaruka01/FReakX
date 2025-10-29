import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import AnimatedCard from '../components/AnimatedCard';
import './HomePage.css';

const HomePage = () => {
  // Men's and Women's sections
  const mensSection = [
    { id: 1, name: 'Casual Shirt', category: 'Men\'s Fashion', image: '/photos/casual_shirt.jpeg', price: 799, originalPrice: 999 },
    { id: 2, name: 'Straight Fit Jeans', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1299, originalPrice: 1599 },
    { id: 3, name: 'Sports Shoes', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 1999, originalPrice: 2499 },
    { id: 4, name: 'Formal Shirt', category: 'Men\'s Fashion', image: '/photos/formal_shirt.jpeg', price: 899, originalPrice: 1199 },
    { id: 5, name: 'Cargo Pants', category: 'Men\'s Fashion', image: '/photos/mens_jeans.jpeg', price: 1099, originalPrice: 1399 },
    { id: 6, name: 'Running Shoes', category: 'Men\'s Footwear', image: '/photos/mens_shoes.jpeg', price: 1799, originalPrice: 2299 },
  ];

  const womensSection = [
    { id: 7, name: 'Summer Dress', category: 'Women\'s Fashion', image: '/photos/Summer_Dress.jpeg', price: 1299, originalPrice: 1599 },
    { id: 8, name: 'Designer Handbag', category: 'Women\'s Accessories', image: '/photos/Designer_Handbag.jpeg', price: 1599, originalPrice: 1999 },
    { id: 9, name: 'Casual Sandals', category: 'Women\'s Footwear', image: '/photos/Casual_Sandals.jpeg', price: 899, originalPrice: 1199 },
    { id: 10, name: 'Evening Gown', category: 'Women\'s Fashion', image: '/photos/Evening_Gown.jpeg', price: 1899, originalPrice: 2299 },
    { id: 11, name: 'Clutch Purse', category: 'Women\'s Accessories', image: '/photos/Clutch_Purse.jpeg', price: 699, originalPrice: 999 },
    { id: 12, name: 'Heeled Sandals', category: 'Women\'s Footwear', image: '/photos/Heeled_Sandals.jpeg', price: 1299, originalPrice: 1599 },
  ];

  const trending = [
    { id: 13, name: 'Rajasthani Lehenga', category: 'Ethnic Wear', image: '/photos/rajasthani_base.jpeg', price: 3499, originalPrice: 4299 },
    { id: 14, name: 'Men\'s Kurta Set', category: 'Ethnic Wear', image: '/photos/rajasthani_men_dress.jpeg', price: 2299, originalPrice: 2999 },
    { id: 15, name: 'Traditional Juttis', category: 'Footwear', image: '/photos/rajasthani_juti.jpeg', price: 799, originalPrice: 1099 },
    { id: 16, name: 'Rajasthani jewelry', category: 'Ethnic Wear', image: '/photos/Rajasthani_jewelry.jpeg', price: 2899, originalPrice: 3499 },
    { id: 18, name: 'Embroidered Mojris', category: 'Footwear', image: '/photos/Embroidered_Mojris.jpeg', price: 999, originalPrice: 1299 },
  ];

  const topRated = [
    { id: 19, name: 'Leather Watch', category: 'Accessories', price: 2499, originalPrice: 3299, image: '/photos/Leather_Watch.jpeg' },
    { id: 20, name: 'Silver Necklace', category: 'Jewelry', price: 1899, originalPrice: 2499, image: '/photos/silver-deer-heart-necklace.jpg' },
    { id: 21, name: 'Premium Perfume', category: 'Fragrance', price: 1299, originalPrice: 1699, image: '/photos/Premium_Perfume.jpeg' },
    { id: 22, name: 'Sunglasses', category: 'Accessories', price: 1499, originalPrice: 1999, image: '/photos/Sunglasses.jpeg' },
    { id: 23, name: 'Ring', category: 'Jewelry', price: 8999, originalPrice: 11999, image: '/photos/Ring.jpeg' },
    { id: 24, name: 'Body Mist Set', category: 'Fragrance', price: 999, originalPrice: 1499, image: '/photos/perfume.jpg' },
  ];

  // State to track visible items count for each section
  const [visibleCounts, setVisibleCounts] = React.useState({
    mens: 4,
    womens: 4,
    trending: 4,
    topRated: 4
  });

  // Function to load more items
  const loadMore = (section) => {
    setVisibleCounts(prev => ({
      ...prev,
      [section]: prev[section] + 4
    }));
  };

  return (
    <div className="app-root">
      <Navbar />
      <main className="container home-page">
        <div className="main-content">
          <AnimatedCard />
          <div className="content-with-sidebar">
            <Sidebar />
            <div className="content">
              {/* Men's Section */}
              <section className="product-section">
                <div className="section-header">
                  <h2>Men's Collection</h2>
                  {visibleCounts.mens < mensSection.length && (
                    <button 
                      className="see-more-btn"
                      onClick={() => loadMore('mens')}
                    >
                      See More
                    </button>
                  )}
                </div>
                <div className="product-grid">
                  {mensSection.slice(0, visibleCounts.mens).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              {/* Women's Section */}
              <section className="product-section">
                <div className="section-header">
                  <h2>Women's Collection</h2>
                  {visibleCounts.womens < womensSection.length && (
                    <button 
                      className="see-more-btn"
                      onClick={() => loadMore('womens')}
                    >
                      See More
                    </button>
                  )}
                </div>
                <div className="product-grid">
                  {womensSection.slice(0, visibleCounts.womens).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              {/* Trending Section */}
              <section className="product-section">
                <div className="section-header">
                  <h2>Trending Now</h2>
                  {visibleCounts.trending < trending.length && (
                    <button 
                      className="see-more-btn"
                      onClick={() => loadMore('trending')}
                    >
                      See More
                    </button>
                  )}
                </div>
                <div className="product-grid">
                  {trending.slice(0, visibleCounts.trending).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              {/* Top Rated Section */}
              <section className="product-section">
                <div className="section-header">
                  <h2>Top Rated</h2>
                  {visibleCounts.topRated < topRated.length && (
                    <button 
                      className="see-more-btn"
                      onClick={() => loadMore('topRated')}
                    >
                      See More
                    </button>
                  )}
                </div>
                <div className="product-grid">
                  {topRated.slice(0, visibleCounts.topRated).map((product) => (
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
