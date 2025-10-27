import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [openCategories, setOpenCategories] = useState({ Clothes: true });

  const categories = [
    { name: 'Clothes', count: 300, sub: ['Shirt', 'Shorts & Jeans', 'Jacket', 'Dress & Frock'] },
    { name: 'Footwear', count: 87, sub: [] },
    { name: 'Jewelry', count: 50, sub: [] },
    { name: 'Cosmetics', count: 87, sub: [] },
    { name: 'Glasses', count: 53, sub: [] },
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
            <div className="category-header" onClick={() => category.sub && handleToggle(category.name)}>
              <span>{category.name}</span>
              {category.sub && <span>{openCategories[category.name] ? '—' : '+'}</span>}
            </div>
            {category.sub && openCategories[category.name] && (
              <ul className="subcategory-list">
                {category.sub.map(subItem => (
                  <li key={subItem} className="subcategory-item">
                    <span>{subItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
