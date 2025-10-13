import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StateDetailPage from './pages/StateDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state/:stateCode" element={<StateDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
