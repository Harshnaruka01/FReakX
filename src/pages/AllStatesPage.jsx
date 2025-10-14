import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FilterModal from '../components/FilterModal';
import { useFilteredStates } from '../hooks/useFilteredStates';

const AllStatesPage = () => {
  const { filteredStates, filteredCount, totalStates } = useFilteredStates();

  return (
    <div className="app-root">
      <Navbar />
      <FilterModal />
      
      <main className="container" style={{ padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--accent)' }}>
            All Indian States
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            Explore the rich cultural heritage and traditional clothing from different states of India
          </p>
        </div>

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

export default AllStatesPage;
