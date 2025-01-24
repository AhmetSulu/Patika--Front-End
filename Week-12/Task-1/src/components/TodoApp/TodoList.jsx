import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ 
  todos, 
  editingId, 
  editText, 
  onToggle, 
  onDelete, 
  onStartEditing, 
  onEditChange, 
  onFinishEditing, 
  onCancelEditing,
  onToggleAll 
}) => {
  const allDone = todos.every(todo => todo.done);
  
  return todos.length > 0 ? (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allDone}
        onChange={(e) => onToggleAll(e.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            editingId={editingId}
            editText={editText}
            onToggle={onToggle}
            onDelete={onDelete}
            onStartEditing={onStartEditing}
            onEditChange={onEditChange}
            onFinishEditing={onFinishEditing}
            onCancelEditing={onCancelEditing}
          />
        ))}
      </ul>
    </section>
  ) : null;
};

export default TodoList;