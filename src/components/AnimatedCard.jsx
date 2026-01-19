import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductById } from '../data/productCatalog';
import './AnimatedCard.css';
 
const AnimatedCard = ({ items, interval = 5000 }) => {
  const [activePage, setActivePage] = useState('grid');
  const navigate = useNavigate();

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

  const handleProductClick = (productId, imageSrc) => {
    if (!productId) return;
    const state = imageSrc ? { imageOverride: imageSrc } : undefined;
    navigate(`/product/${productId}`, { state });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'grid':
        return <GridView onProductClick={handleProductClick} />;
      case 'banner':
        return <BannerView onProductClick={handleProductClick} />;
      case 'genz':
        return <GenZView onProductClick={handleProductClick} />;
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

const GridView = ({ onProductClick }) => {
  const dresses = [
    {
      id: 1,
      name: 'Regal Lehenga',
      description: 'Golden embellishments',
      alt: 'Lehenga',
      image: '/photos/Lehenga.jpeg',
      productId: 13
    },
    {
      id: 2,
      name: 'Classic Saree',
      description: 'Silk border elegance',
      alt: 'Saree',
      image: '/photos/Classic_Saree.jpeg',
      productId: 7
    },
    {
      id: 3,
      name: 'Modern Saree',
      description: 'South Indian flair',
      alt: 'Half Saree',
      image: '/photos/Modern_Saree.jpeg',
      productId: 10
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
        {dresses.map((dress, index) => {
          const product = dress.productId ? getProductById(dress.productId) : null;
          const displayName = dress.name || product?.name;
          const description = dress.description || product?.description;
          const imageSrc = dress.image || product?.image;
          const price = product?.price;

          return (
          <motion.div
            key={dress.id}
            className="dress-item-card"
            variants={itemVariants}
            style={{ '--i': index }}
            role="button"
            tabIndex={0}
            onClick={() => onProductClick?.(dress.productId, imageSrc)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onProductClick?.(dress.productId, imageSrc);
              }
            }}
          >
            <img
              src={imageSrc}
              alt={dress.alt || displayName || 'Product'}
              loading="lazy"
            />
            <div className="dress-info">
              <div className="dress-name">{displayName}</div>
              <div className="dress-desc">{description}</div>
              {price && (
                <div className="dress-price">
                  ₹{price.toFixed(2)}
                </div>
              )}
            </div>
          </motion.div>
        );
        })}
      </div>
    </motion.div>
  );
};

const BannerView = ({ onProductClick }) => {
  const stateDresses = [
    { id: 1, name: 'Rajasthan Bandhani', description: 'Royal traditional saree', alt: 'Rajasthan Bandhani Saree', image: '/photos/Rajasthan_Bandhani.jpeg', productId: 13 },
    { id: 2, name: 'Punjab Phulkari', description: 'Colorful embroidered suit', alt: 'Punjab Phulkari Suit', image: '/photos/Punjab_Phulkari.jpeg', productId: 14 },
    { id: 3, name: 'Kerala Kasavu', description: 'Elegant mundu saree', alt: 'Kerala Kasavu Mundu', image: '/photos/Kerala_Kasav.jpeg', productId: 703 },
    { id: 4, name: 'Maharashtra Nauvari', description: 'Traditional 9-yard saree', alt: 'Maharashtra Nauvari Saree', image: '/photos/Maharashtra_Nauvari.jpeg', productId: 1303 },
    { id: 5, name: 'West Bengal Saree', description: 'Red-bordered saree', alt: 'West Bengal Saree', image: '/photos/WestBengal_Saree.jpeg', productId: 1001 }
  ];

  return (
    <div className="banner-wrapper">
      <div className="banner-bg"></div>
      <div className="banner-content">
        {stateDresses.map((dress, index) => {
          const product = dress.productId ? getProductById(dress.productId) : null;
          const imageSrc = dress.image || product?.image;
          const displayName = dress.name || product?.name;
          const price = product?.price;

          return (
          <div
            key={dress.id}
            className="dress-card-state"
            style={{ '--i': index }}
            role="button"
            tabIndex={0}
            onClick={() => onProductClick?.(dress.productId, imageSrc)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onProductClick?.(dress.productId, imageSrc);
              }
            }}
          >
            <img src={imageSrc} alt={dress.alt || displayName || 'Product'} />
            <div className="dress-name-state">{displayName}</div>
            <div className="dress-desc-state">{dress.description}</div>
            {price && (
              <div className="dress-price-state">₹{price.toFixed(2)}</div>
            )}
          </div>
        );
        })}
      </div>
    </div>
  );
};

const GenZView = ({ onProductClick }) => {
  const genzItems = [
    {
      id: 1,
      name: "Men's Fusion",
      subtitle: 'Urban & Trendy',
      alt: "GenZ Men's Fusion",
      image: '/photos/genZ_men.jpeg',
      productId: 6
    },
    {
      id: 2,
      name: "Women's Fusion",
      subtitle: 'Modern Classic',
      alt: "GenZ Women's Fusion",
      image: '/photos/GenZ_girls.jpeg',
      productId: 7
    },
    {
      id: 3,
      name: 'Stylish Kurtis',
      subtitle: 'Comfort & Style',
      alt: 'GenZ Stylish Kurti',
      image: '/photos/Stylish_Kurtis.jpeg',
      productId: 1401
    }
  ];

  return (
    <div className="genz-banner">
      {genzItems.map((item, index) => {
        const product = item.productId ? getProductById(item.productId) : null;
        const imageSrc = item.image || product?.image;
        const displayName = item.name || product?.name;
        const price = product?.price;

        return (
        <div
          key={item.id}
          className="genz-card"
          style={{ '--i': index }}
          role="button"
          tabIndex={0}
          onClick={() => onProductClick?.(item.productId, imageSrc)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onProductClick?.(item.productId, imageSrc);
            }
          }}
        >
          <img src={imageSrc} alt={item.alt || displayName || 'Product'} />
          <div className="card-title">{displayName}</div>
          <div className="card-subtitle">{item.subtitle}</div>
          {price && (
            <div className="genz-price">₹{price.toFixed(2)}</div>
          )}
        </div>
        );
      })}
    </div>
  );
};

export default AnimatedCard;