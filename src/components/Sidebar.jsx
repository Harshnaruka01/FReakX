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
      count: 87, 
      path: '/footwear',
      hasSubmenu: false
    },
    { 
      name: 'Jewelry', 
      count: 50, 
      sub: [],
      hasSubmenu: false
    },
    { 
      name: 'Cosmetics', 
      count: 87, 
      sub: [],
      hasSubmenu: false
    },
    { 
      name: 'Glasses', 
      count: 53, 
      sub: [],
      hasSubmenu: false
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
