import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import StateDetailPage from './pages/StateDetailPage';
import AllStatesPage from './pages/AllStatesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FootwearPage from './pages/FootwearPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import UserAccountPage from './pages/UserAccountPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/state/:stateCode" element={<StateDetailPage />} />
            <Route path="/states" element={<AllStatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/footwear" element={<FootwearPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<UserAccountPage />} />
          </Routes>
        </Router>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
