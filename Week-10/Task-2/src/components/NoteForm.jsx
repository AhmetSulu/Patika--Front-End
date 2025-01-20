import { useState } from 'react';
import { useNoteContext } from '../context/NoteContext';
import { COLORS } from '../utils/constants';

export const NoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const { state, dispatch } = useNoteContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        text: noteText,
        color: state.selectedColor,
        date: new Date().toLocaleString()
      };
      
      dispatch({ type: 'ADD_NOTE', payload: newNote });
      setNoteText('');
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Add new note..."
        />
        <div className="form-footer">
          <div className="color-picker">
            {COLORS.map((color) => (
              <button
                key={color.id}
                type="button"
                className={`color-button ${state.selectedColor === color.value ? 'selected' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => dispatch({ type: 'SET_COLOR', payload: color.value })}
              />
            ))}
          </div>
          <button type="submit" className="submit-button">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};