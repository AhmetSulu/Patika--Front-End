import { useState } from 'react';
import { useNoteContext } from '../context/NoteContext';

export const NoteCard = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const { dispatch } = useNoteContext();

  const handleDelete = () => {
    if (window.confirm('Bu notu silmek istediğinizden emin misiniz?')) {
      dispatch({ type: 'DELETE_NOTE', payload: note.id });
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch({
        type: 'UPDATE_NOTE',
        payload: {
          ...note,
          text: editedText,
          date: new Date().toLocaleString()
        }
      });
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedText(note.text);
    setIsEditing(false);
  };

  return (
    <div className="note-card" style={{ backgroundColor: note.color }}>
      {isEditing ? (
        <textarea
          className="note-edit-textarea"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
        />
      ) : (
        <p className="note-text">{note.text}</p>
      )}
      
      <div className="note-footer">
        <span className="note-date">{note.date}</span>
        <div className="note-actions">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="note-button save"
                aria-label="Kaydet"
              >
                💾
              </button>
              <button
                onClick={handleCancel}
                className="note-button cancel"
                aria-label="İptal"
              >
                ❌
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="note-button edit"
                aria-label="Düzenle"
              >
                ✏️
              </button>
              <button
                onClick={handleDelete}
                className="note-button delete"
                aria-label="Sil"
              >
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};