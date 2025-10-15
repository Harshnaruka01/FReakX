import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import AnimatedCard from '../components/AnimatedCard';
import { useFilteredStates } from '../hooks/useFilteredStates';

const HomePage = () => {
  const { filteredStates, filteredCount, totalStates } = useFilteredStates();

  const featuredContent = [
    {
      title: "Discover India's Rich Heritage",
      description: "Explore the diverse cultural heritage of Indian states and their unique traditions.",
      link: "/about"
    },
    {
      title: "Plan Your Next Adventure",
      description: "Find the best travel destinations and plan your next trip across India's beautiful states.",
      link: "/states"
    },
    {
      title: "Experience Local Cuisine",
      description: "Discover the unique flavors and traditional dishes from different regions of India.",
      link: "/cuisine"
    }
  ];

  return (
    <div className="app-root">
      <Navbar />
      <FilterModal />

      <main className="container">
        <AnimatedCard items={featuredContent} interval={5000} />
        {filteredCount > 0 && (
          <div className="results-info">
          </div>
        )}
        
        {filteredCount === 0 ? (
          <div className="no-results">
            <h3>No states found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="home-grid">
            {filteredStates.map((state) => (
              <Link 
                key={state.code} 
                to={`/state/${state.code}`}
                className="state-card"
              >
                <img src={state.thumb} alt={state.name} />
                <h3>{state.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
