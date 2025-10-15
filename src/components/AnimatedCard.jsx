import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimatedCard = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="animated-card-container">
      <div className="animated-card">
        <div className="animated-card-content">
          <h3>{currentItem.title}</h3>
          <p>{currentItem.description}</p>
          {currentItem.link && (
            <Link to={currentItem.link} className="animated-card-link">
              Learn more →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
