import { useState, useEffect } from 'react'

export const useTodos = (initTodosState, filterFromStorage) => {
 const [ todos, setTodos ] = useState(initTodosState)
  const [filter, setFilter] = useState(filterFromStorage)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter]);

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState => [...prevState, newTodo])
  }

  const handleToggle = (todo) => {
    const { id, completed} = todo
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        const newTodo = {
          ...todo,completed
        }
        return newTodo
      }
      return todo
    })
    setTodos(newTodos)
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id)
    setTodos(filteredTodos)
  }

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue)
  }

  const completedTodos = todos.filter((todo) => todo.completed)
  const totalTodos = todos.length

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed
    }
    if (filter === 'pending') {
      return !todo.completed
    }
    return todo
  })

  const hasTodos = todos.length > 0
    
    return {
        filter,
        todos,
        createTodo,
        handleToggle,
        handleDelete,
        handleFilterChange,
        filteredTodos,
        hasTodos,
        completedTodos,
        totalTodos
    }
}