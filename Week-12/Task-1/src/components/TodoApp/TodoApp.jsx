import React, { useState } from 'react';
import { initialTodos } from '../../constants/initialTodos';
import { useTodoManagement } from "../../hooks/useTodoManagement";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const TodoApp = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    toggleAllTodos,
    clearCompletedTodos
  } = useTodoManagement(initialTodos);

  const filteredTodos = useTodoFilter(todos, activeFilter);

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText('');
  };

  const pendingTodos = todos.filter(todo => !todo.done);
  const completedTodos = todos.filter(todo => todo.done);

  return (
    <>
      <section className="todoapp">
        <TodoHeader 
          onAddTodo={handleAddTodo}
          newTodo={newTodoText}
          setNewTodo={setNewTodoText}
        />

        <TodoList 
          todos={filteredTodos}
          editingId={editingId}
          editText={editText}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onStartEditing={(id, text) => {
            setEditingId(id);
            setEditText(text);
          }}
          onEditChange={setEditText}
          onFinishEditing={(id) => {
            updateTodo(id, editText);
            setEditingId(null);
            setEditText('');
          }}
          onCancelEditing={() => {
            setEditingId(null);
            setEditText('');
          }}
          onToggleAll={toggleAllTodos}
        />

        {todos.length > 0 && (
          <TodoFooter 
            todosLeft={pendingTodos.length}
            todosDone={completedTodos.length}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onClearCompleted={clearCompletedTodos}
          />
        )}
      </section>
      
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
};

export default TodoApp;