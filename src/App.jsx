import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import HomePage from './pages/HomePage';
import StateDetailPage from './pages/StateDetailPage';
import AllStatesPage from './pages/AllStatesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FootwearPage from './pages/FootwearPage';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/state/:stateCode" element={<StateDetailPage />} />
          <Route path="/states" element={<AllStatesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/footwear" element={<FootwearPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
