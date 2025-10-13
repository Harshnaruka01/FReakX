import React from 'react';
import { Link } from 'react-router-dom';
import statesData from '../data/statesData';

const HomePage = () => {
  return (
    <div className="app-root">
      <header className="topbar">
        <div className="brand">India Traditions</div>
      </header>

      <main className="container">
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

export default HomePage;
