import { useMemo } from 'react';
import { useSearch } from '../context/SearchContext';
import statesData from '../data/statesData';

const stateRegions = {
  // North India
  'PB': 'north',
  'HP': 'north',
  'JK': 'north',
  'HR': 'north',
  'UK': 'north',
  'DL': 'north',
  'UP': 'north',
  
  // South India
  'TN': 'south',
  'KL': 'south',
  'KA': 'south',
  'AP': 'south',
  'TG': 'south',
  
  // East India
  'WB': 'east',
  'OD': 'east',
  'BR': 'east',
  'JH': 'east',
  
  // West India
  'RJ': 'west',
  'GJ': 'west',
  'MH': 'west',
  'GA': 'west',
  
  // Central India
  'MP': 'central',
  'CG': 'central',
  
  // Northeast India
  'AS': 'northeast',
  'AR': 'northeast',
  'MN': 'northeast',
  'ML': 'northeast',
  'MZ': 'northeast',
  'NL': 'northeast',
  'TR': 'northeast',
  'SK': 'northeast'
};

export const useFilteredStates = () => {
  const { searchQuery, filterRegion } = useSearch();

  const filteredStates = useMemo(() => {
    let filtered = statesData;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(state => 
        state.name.toLowerCase().includes(query) ||
        state.clothes.some(cloth => 
          cloth.name.toLowerCase().includes(query) ||
          cloth.description.toLowerCase().includes(query)
        )
      );
    }

    // Filter by region
    if (filterRegion !== 'all') {
      filtered = filtered.filter(state => 
        stateRegions[state.code] === filterRegion
      );
    }

    return filtered;
  }, [searchQuery, filterRegion]);

  return {
    filteredStates,
    totalStates: statesData.length,
    filteredCount: filteredStates.length
  };
};
