import React from 'react';

const TodoItem = ({ 
  todo, 
  editingId, 
  editText, 
  onToggle, 
  onDelete, 
  onStartEditing, 
  onEditChange, 
  onFinishEditing, 
  onCancelEditing 
}) => (
  <li
    key={todo.id}
    className={`${todo.done ? 'completed' : ''} ${editingId === todo.id ? 'editing' : ''}`}
  >
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <label onDoubleClick={() => onStartEditing(todo.id, todo.text)}>
        {todo.text}
      </label>
      <button
        className="destroy"
        onClick={() => onDelete(todo.id)}
      />
    </div>
    {editingId === todo.id && (
      <input
        className="edit"
        value={editText}
        onChange={(e) => onEditChange(e.target.value)}
        onBlur={() => onFinishEditing(todo.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onFinishEditing(todo.id);
          if (e.key === 'Escape') onCancelEditing();
        }}
        autoFocus
      />
    )}
  </li>
);

export default TodoItem;