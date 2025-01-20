import { createContext, useContext, useReducer, useEffect } from 'react';
import { INITIAL_NOTE_STATE, LOCAL_STORAGE_KEY } from '../utils/constants';

const NoteContext = createContext();

const noteReducer = (state, action) => {
  let updatedNotes;
  
  switch (action.type) {
    case 'ADD_NOTE':
      updatedNotes = [...state.notes, action.payload];
      break;
      
    case 'DELETE_NOTE':
      updatedNotes = state.notes.filter(note => note.id !== action.payload);
      break;
      
    case 'UPDATE_NOTE':
      updatedNotes = state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note
      );
      break;
      
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
  
  if (updatedNotes) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
    return {
      ...state,
      notes: updatedNotes
    };
  }
  
  return state;
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