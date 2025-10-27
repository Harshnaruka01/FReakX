import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedCard.css';
 
const AnimatedCard = ({ items, interval = 5000 }) => {
  const [activePage, setActivePage] = useState('grid');

  useEffect(() => {
    const cycle = ['grid', 'banner', 'genz'];
    let currentIndex = 0;

    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % cycle.length;
      setActivePage(cycle[currentIndex]);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderContent = () => {
    switch (activePage) {
      case 'grid':
        return <GridView />;
      case 'banner':
        return <BannerView />;
      case 'genz':
        return <GenZView />;
      default:
        return null;
    }
  };

  return (
    <div className="animated-card-wrapper">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activePage}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const GridView = () => {
  const dresses = [
    {
      id: 1,
      name: 'Regal Lehenga',
      description: 'Golden embellishments',
      image: '/photos/Lehenga.jpeg',
      alt: 'Lehenga'
    },
    {
      id: 2,
      name: 'Classic Saree',
      description: 'Silk border elegance',
      image: '/photos/Classic_Saree.jpeg',
      alt: 'Saree'
    },
    {
      id: 3,
      name: 'Modern Saree',
      description: 'South Indian flair',
      image: '/photos/Modern_Saree.jpeg',
      alt: 'Half Saree'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      className="main-banner-showcase"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="dress-showcase-grid">
        {dresses.map((dress, index) => (
          <motion.div
            key={dress.id}
            className="dress-item-card"
            variants={itemVariants}
            style={{ '--i': index }}
          >
            <img
              src={dress.image}
              alt={dress.alt}
              loading="lazy"
            />
            <div className="dress-info">
              <div className="dress-name">{dress.name}</div>
              <div className="dress-desc">{dress.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const BannerView = () => {
  const stateDresses = [
    { id: 1, name: 'Rajasthan Bandhani', description: 'Royal traditional saree', image: '/photos/Rajasthan_Bandhani.jpeg', alt: 'Rajasthan Bandhani Saree' },
    { id: 2, name: 'Punjab Phulkari', description: 'Colorful embroidered suit', image: '/photos/Punjab_Phulkari.jpeg', alt: 'Punjab Phulkari Suit' },
    { id: 3, name: 'Kerala Kasavu', description: 'Elegant mundu saree', image: '/photos/Kerala_Kasav.jpeg', alt: 'Kerala Kasavu Mundu' },
    { id: 4, name: 'Maharashtra Nauvari', description: 'Traditional 9-yard saree', image: '/photos/Maharashtra_Nauvari.jpeg', alt: 'Maharashtra Nauvari Saree' },
    { id: 5, name: 'West Bengal Saree', description: 'Red-bordered saree', image: '/photos/WestBengal_Saree.jpeg', alt: 'West Bengal Saree' }
  ];

  return (
    <div className="banner-wrapper">
      <div className="banner-bg"></div>
      <div className="banner-content">
        {stateDresses.map((dress, index) => (
          <div key={dress.id} className="dress-card-state" style={{ '--i': index }}>
            <img src={dress.image} alt={dress.alt} />
            <div className="dress-name-state">{dress.name}</div>
            <div className="dress-desc-state">{dress.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GenZView = () => {
  const genzItems = [
    {
      id: 1,
      name: "Men's Fusion",
      subtitle: 'Urban & Trendy',
      image: '/photos/genZ_men.jpeg',
      alt: "GenZ Men's Fusion"
    },
    {
      id: 2,
      name: "Women's Fusion",
      subtitle: 'Modern Classic',
      image: '/photos/GenZ_girls.jpeg',
      alt: "GenZ Women's Fusion"
    },
    {
      id: 3,
      name: 'Stylish Kurtis',
      subtitle: 'Comfort & Style',
      image: '/photos/Stylish_Kurtis.jpeg',
      alt: 'GenZ Stylish Kurti'
    }
  ];

  return (
    <div className="genz-banner">
      {genzItems.map((item, index) => (
        <div key={item.id} className="genz-card" style={{ '--i': index }}>
          <img src={item.image} alt={item.alt} />
          <div className="card-title">{item.name}</div>
          <div className="card-subtitle">{item.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCard;