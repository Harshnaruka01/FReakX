import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import { useFilteredStates } from '../hooks/useFilteredStates';

const HomePage = () => {
  const { filteredStates, filteredCount, totalStates } = useFilteredStates();

  return (
    <div className="app-root">
      <Navbar />
      <FilterModal />

      <main className="container">
        {filteredCount > 0 && (
          <div className="results-info">
            <p>Showing {filteredCount} of {totalStates} states</p>
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
