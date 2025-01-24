import React from 'react';
import TodoFilter from './TodoFilter';

const TodoFooter = ({ 
  todosLeft, 
  todosDone, 
  activeFilter, 
  onFilterChange, 
  onClearCompleted 
}) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{todosLeft}</strong> {todosLeft === 1 ? 'item' : 'items'} left
    </span>

    <TodoFilter 
      activeFilter={activeFilter} 
      onFilterChange={onFilterChange} 
    />

    {todosDone > 0 && (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    )}
  </footer>
);

export default TodoFooter;