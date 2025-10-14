import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const resetFilters = () => {
    setSearchQuery('');
    setFilterRegion('all');
  };

  const value = {
    searchQuery,
    setSearchQuery,
    filterRegion,
    setFilterRegion,
    isFilterOpen,
    setIsFilterOpen,
    resetFilters
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
