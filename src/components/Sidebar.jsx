import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState({ Clothes: true });

  const categories = [
    { 
      name: 'Clothes', 
      count: 300, 
      sub: ['Shirt', 'Shorts & Jeans', 'Jacket', 'Dress & Frock'],
      hasSubmenu: true
    },
    { 
      name: 'Footwear', 
      count: 200, 
      sub: [
        'Sports Shoes',
        'Casual Shoes',
        'Formal Shoes',
        'Sneakers',
        'Sandals',
        'Slippers',
        'Boots',
        'Loafers',
      ],
      hasSubmenu: true
    },
    { 
      name: 'Jewelry', 
      count: 50, 
      sub: [
        'Rajasthani Kundan',
        'Meenakari Jewelry',
        'Thewa Jewelry',
        'Lac Jewelry',
        'Silver Tribal Jewelry',
        'Polki Jewelry',
        'Navratna Jewelry',
        'Chandbali Earrings',
        'Hathphool',
        'Baju Bandh',
        'Borla Maang Tikka',
        'Rajasthani Choker'
      ],
      hasSubmenu: true
    },
    { 
      name: 'Cosmetics', 
      count: 150, 
      sub: [
        'Face Makeup',
        'Lipstick & Gloss',
        'Eye Makeup',
        'Nail Polish',
        'Makeup Brushes',
        'Face Care',
        'Body Care',
        'Hair Care',
        'Fragrances',
        'Makeup Kits',
        'Beauty Tools',
        'Men\'s Grooming',
        'Ayurvedic Products',
        'Organic & Natural',
      ],
      hasSubmenu: true
    },
    { 
      name: 'Glasses', 
      count: 120, 
      sub: [
        'Sunglasses',
        'Reading Glasses',
        'Computer Glasses',
        'Blue Light Glasses',
        'Prescription Glasses',
        'Sports Glasses',
        'Polarized Sunglasses',
        'Gradient Lenses',
        'Designer Frames',
        'Kids\' Glasses',
        'Safety Glasses'
      ],
      hasSubmenu: true
    },
  ];

  const handleToggle = (categoryName) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Category</h2>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.name} className="category-item">
            {category.hasSubmenu ? (
              <>
                <div className="category-header" onClick={() => handleToggle(category.name)}>
                  <span>{category.name}</span>
                  <span>{openCategories[category.name] ? '—' : '+'}</span>
                </div>
                {openCategories[category.name] && (
                  <ul className="subcategory-list">
                    {category.sub.map(subItem => (
                      <li key={subItem} className="subcategory-item">
                        <span>{subItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={category.path || '#'} className="category-link">
                <div className="category-header">
                  <span>{category.name}</span>
                  <span>→</span>
                </div>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
