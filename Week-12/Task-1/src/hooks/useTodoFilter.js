export const useTodoFilter = (todos, activeFilter) => {
    return todos.filter(todo => {
      switch (activeFilter) {
        case 'active': return !todo.done;
        case 'completed': return todo.done;
        default: return true;
      }
    });
  };