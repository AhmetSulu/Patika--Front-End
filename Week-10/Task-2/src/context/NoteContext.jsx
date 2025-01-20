import { createContext, useContext, useReducer, useEffect } from 'react';
import { INITIAL_NOTE_STATE, LOCAL_STORAGE_KEY } from '../utils/constants';

const NoteContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNotes = [...state.notes, action.payload];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newNotes));
      return {
        ...state,
        notes: newNotes
      };
      
    case 'SET_COLOR':
      return {
        ...state,
        selectedColor: action.payload
      };
      
    case 'SET_SEARCH':
      return {
        ...state,
        searchTerm: action.payload
      };
      
    case 'LOAD_NOTES':
      return {
        ...state,
        notes: action.payload
      };
      
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, INITIAL_NOTE_STATE);

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedNotes) {
        dispatch({ type: 'LOAD_NOTES', payload: JSON.parse(savedNotes) });
      }
    } catch (error) {
      console.error('Error loading notes from localStorage:', error);
    }
  }, []);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
};