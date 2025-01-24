import React from 'react';

const TodoHeader = ({ onAddTodo, newTodo, setNewTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <form onSubmit={onAddTodo}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        autoFocus
      />
    </form>
  </header>
);

export default TodoHeader;