import React from 'react';
import { useParams, Link } from 'react-router-dom';
import statesData from '../data/statesData';
import ClothesDisplay from '../components/ClothesDisplay';

const StateDetailPage = () => {
  const { stateCode } = useParams();
  
  // Find the state by code
  const selectedState = statesData.find(state => state.code === stateCode);

  if (!selectedState) {
    return (
      <div className="app-root">
        <header className="topbar">
          <div className="brand">India Traditions</div>
        </header>
        <main className="container">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2>State not found</h2>
            <Link to="/" className="back">
              ← Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-root">
      <header className="topbar">
        <div className="brand">India Traditions</div>
      </header>

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
    </div>
  );
};

export default StateDetailPage;
