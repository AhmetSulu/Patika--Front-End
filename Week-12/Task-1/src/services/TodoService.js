export const TodoService = {
    generateId: () => `todo-${Date.now()}`,
    
    validate: (text) => text.trim() !== '',
    
    create: (text) => ({
      id: TodoService.generateId(),
      text: text.trim(),
      done: false
    }),
  
    toggleStatus: (todo) => ({
      ...todo,
      done: !todo.done
    })
  };