import React from 'react';
import { Link } from 'react-router-dom';
import statesData from '../data/statesData';
import Navbar from '../components/Navbar';

const AllStatesPage = () => {
  return (
    <div className="app-root">
      <Navbar />
      
      <main className="container" style={{ padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--accent)' }}>
            All Indian States
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            Explore the rich cultural heritage and traditional clothing from different states of India
          </p>
        </div>

        <div className="home-grid">
          {statesData.map((state) => (
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
      </main>
    </div>
  );
};

export default AllStatesPage;
