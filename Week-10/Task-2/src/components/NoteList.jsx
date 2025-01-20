import { useNoteContext } from '../context/NoteContext';
import { NoteCard } from './NoteCard';

export const NoteList = () => {
  const { state } = useNoteContext();

  const filteredNotes = state.notes.filter(note =>
    note.text.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div className="notes-grid-container">
      <div className="notes-grid">
        {filteredNotes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};