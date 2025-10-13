import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="app-root">
      <Navbar />
      
      <main className="container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--accent)' }}>
            About FReakX
          </h1>
        </div>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '20px', color: '#e6eef8' }}>
            Welcome to FReakX, your gateway to exploring the rich and diverse traditional clothing heritage of India. 
            Our platform showcases the beautiful cultural traditions and authentic attire from different states across India.
          </p>

          <h2 style={{ color: 'var(--accent)', marginTop: '30px', marginBottom: '15px' }}>
            Our Mission
          </h2>
          <p style={{ marginBottom: '20px', color: '#e6eef8' }}>
            To preserve and celebrate India's incredible textile heritage by providing an interactive platform 
            where people can discover, learn about, and appreciate the traditional clothing from various Indian states.
          </p>

          <h2 style={{ color: 'var(--accent)', marginTop: '30px', marginBottom: '15px' }}>
            What We Offer
          </h2>
          <ul style={{ marginBottom: '20px', color: '#e6eef8', paddingLeft: '20px' }}>
            <li>Comprehensive collection of traditional Indian clothing</li>
            <li>Detailed information about each state's cultural heritage</li>
            <li>High-quality images showcasing authentic attire</li>
            <li>Educational content about textile traditions</li>
          </ul>

          <h2 style={{ color: 'var(--accent)', marginTop: '30px', marginBottom: '15px' }}>
            Cultural Heritage
          </h2>
          <p style={{ marginBottom: '20px', color: '#e6eef8' }}>
            From the vibrant Ghagra Cholis of Rajasthan to the elegant Kanchipuram sarees of Tamil Nadu, 
            each state in India has its unique textile traditions that reflect its history, geography, and culture. 
            FReakX brings these traditions to life through our carefully curated collection.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
