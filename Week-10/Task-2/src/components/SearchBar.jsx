import { useNoteContext } from '../context/NoteContext';

export const SearchBar = () => {
  const { state, dispatch } = useNoteContext();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Notlarda ara..."
        value={state.searchTerm}
        onChange={(e) => 
          dispatch({ type: 'SET_SEARCH', payload: e.target.value })
        }
      />
    </div>
  );
};