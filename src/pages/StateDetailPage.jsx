import React from 'react';
import { useParams, Link } from 'react-router-dom';
import statesData from '../data/statesData';
import ClothesDisplay from '../components/ClothesDisplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StateDetailPage = () => {
  const { stateCode } = useParams();
  
  // Find the state by code
  const selectedState = statesData.find(state => state.code === stateCode);

  if (!selectedState) {
    return (
      <div className="app-root">
        <Navbar />
        <main className="container">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2>State not found</h2>
            <Link to="/" className="back">
              ← Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app-root">
      <Navbar />

      <main className="container">
        <div>
          <div className="state-header">
            <img src={selectedState.image} alt={selectedState.name} />
            <div>
              <h2>{selectedState.name}</h2>
              <p className="subtitle">Famous traditional clothes</p>
            </div>
          </div>

          <ClothesDisplay selectedState={selectedState} />

          <div style={{ marginTop: 20 }}>
            <Link to="/" className="back">
              ← Back to states
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StateDetailPage;
