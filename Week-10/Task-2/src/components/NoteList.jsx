import { useNoteContext } from '../context/NoteContext';

export const NoteList = () => {
  const { state } = useNoteContext();

  const filteredNotes = state.notes.filter(note =>
    note.text.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div className="notes-grid-container">
      <div className="notes-grid">
        {filteredNotes.map(note => (
          <div
            key={note.id}
            className="note-card"
            style={{ backgroundColor: note.color }}
          >
            <p className="note-text">{note.text}</p>
            <span className="note-date">{note.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};