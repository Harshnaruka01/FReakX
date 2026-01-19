import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import Sidebar from '../components/Sidebar';
import AnimatedCard from '../components/AnimatedCard';
import { getAllCategories } from '../data/productCatalog';
import './HomePage.css';

const buildSection = (allCategories, names) =>
  names
    .map(name => allCategories.find(category => category.name === name))
    .filter(Boolean);

const HomePage = () => {
  const allCategories = getAllCategories();

  const mensSection = buildSection(allCategories, [
    'Casual Shirt',
    'Straight Fit Jeans',
    'Sports Shoes',
    'Formal Shirt',
    'Cargo Pants',
    'Running Shoes'
  ]);

  const womensSection = buildSection(allCategories, [
    'Summer Dress',
    'Designer Handbag',
    'Casual Sandals',
    'Evening Gown',
    'Clutch Purse',
    'Heeled Sandals'
  ]);

  const trending = buildSection(allCategories, [
    'Rajasthani Lehenga',
    "Men's Kurta Set",
    'Traditional Juttis',
    'Rajasthani Jewelry',
    'Embroidered Mojris'
  ]);

  const topRated = buildSection(allCategories, [
    'Leather Watch',
    'Silver Necklace',
    'Premium Perfume',
    'Sunglasses',
    'Ring',
    'Body Mist Set'
  ]);

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
                  {mensSection.slice(0, visibleCounts.mens).map((category, idx) => (
                    <CategoryCard key={category.name || idx} category={category} />
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
                  {womensSection.slice(0, visibleCounts.womens).map((category, idx) => (
                    <CategoryCard key={category.name || idx} category={category} />
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
                  {trending.slice(0, visibleCounts.trending).map((category, idx) => (
                    <CategoryCard key={category.name || idx} category={category} />
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
                  {topRated.slice(0, visibleCounts.topRated).map((category, idx) => (
                    <CategoryCard key={category.name || idx} category={category} />
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
