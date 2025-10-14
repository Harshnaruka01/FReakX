import React from 'react';
import { useSearch } from '../context/SearchContext';

const FilterModal = () => {
  const { 
    isFilterOpen, 
    setIsFilterOpen, 
    filterRegion, 
    setFilterRegion, 
    resetFilters 
  } = useSearch();

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'north', label: 'North India' },
    { value: 'south', label: 'South India' },
    { value: 'east', label: 'East India' },
    { value: 'west', label: 'West India' },
    { value: 'central', label: 'Central India' },
    { value: 'northeast', label: 'Northeast India' }
  ];

  const stateRegions = {
    'all': [],
    'north': ['PB', 'HP', 'JK', 'HR', 'UK', 'DL', 'UP'],
    'south': ['TN', 'KL', 'KA', 'AP', 'TG'],
    'east': ['WB', 'OD', 'BR', 'JH'],
    'west': ['RJ', 'GJ', 'MH', 'GA'],
    'central': ['MP', 'CG'],
    'northeast': ['AS', 'AR', 'MN', 'ML', 'MZ', 'NL', 'TR', 'SK']
  };

  const handleRegionChange = (region) => {
    setFilterRegion(region);
  };

  const handleApplyFilters = () => {
    setIsFilterOpen(false);
  };

  const handleClose = () => {
    setIsFilterOpen(false);
  };

  if (!isFilterOpen) return null;

  return (
    <div className="filter-modal-overlay" onClick={handleClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-modal-header">
          <h3>Filter States</h3>
          <button className="close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div className="filter-modal-content">
          <div className="filter-section">
            <h4>Filter by Region</h4>
            <div className="region-filters">
              {regions.map((region) => (
                <label key={region.value} className="region-option">
                  <input
                    type="radio"
                    name="region"
                    value={region.value}
                    checked={filterRegion === region.value}
                    onChange={() => handleRegionChange(region.value)}
                  />
                  <span className="region-label">{region.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="filter-info">
            <p>
              {filterRegion === 'all' 
                ? 'Showing all states' 
                : `Showing states from ${regions.find(r => r.value === filterRegion)?.label}`
              }
            </p>
          </div>
        </div>
        
        <div className="filter-modal-footer">
          <button className="reset-button" onClick={resetFilters}>
            Reset Filters
          </button>
          <button className="apply-button" onClick={handleApplyFilters}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
