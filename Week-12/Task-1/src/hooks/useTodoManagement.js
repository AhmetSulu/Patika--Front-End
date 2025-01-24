import { useState, useCallback } from 'react';

export const useTodoManagement = (initialTodos) => {
  const [todos, setTodos] = useState(
    initialTodos.map((todo, index) => ({...todo, id: `todo-${index}`}))
  );

  const addTodo = useCallback((text) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      const newTodo = { 
        id: `todo-${Date.now()}`, 
        text: trimmedText, 
        done: false 
      };
      setTodos(current => [...current, newTodo]);
    }
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(current => 
      current.map(todo => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(current => current.filter(todo => todo.id !== id));
  }, []);

  const updateTodo = useCallback((id, newText) => {
    const trimmedText = newText.trim();
    setTodos(current => 
      trimmedText 
        ? current.map(todo => 
            todo.id === id ? { ...todo, text: trimmedText } : todo
          )
        : current.filter(todo => todo.id !== id)
    );
  }, []);

  const toggleAllTodos = useCallback((checked) => {
    setTodos(current => current.map(todo => ({ ...todo, done: checked })));
  }, []);

  const clearCompletedTodos = useCallback(() => {
    setTodos(current => current.filter(todo => !todo.done));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    toggleAllTodos,
    clearCompletedTodos
  };
};