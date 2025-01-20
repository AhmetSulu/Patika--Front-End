// utils/constants.js
export const COLORS = [
    { id: 1, value: '#FFD700', name: 'Gold' },
    { id: 2, value: '#FF6B6B', name: 'Coral' },
    { id: 3, value: '#4ECDC4', name: 'Turquoise' },
    { id: 4, value: '#95E1D3', name: 'Mint' },
    { id: 5, value: '#A8E6CF', name: 'Light Green' },
    { id: 6, value: '#DFE3E6', name: 'Gray' },
    { id: 7, value: '#FFC3A0', name: 'Peach' },
    { id: 8, value: '#D4A5A5', name: 'Dusty Rose' }
  ];
  
  export const INITIAL_NOTE_STATE = {
    notes: [],
    selectedColor: '#FFD700',
    searchTerm: ''
  };
  
  export const LOCAL_STORAGE_KEY = 'noteapp-notes';