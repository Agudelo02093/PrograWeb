import { Form, List, Filter, Footer } from './components'
import { filters } from './const/filters';
import { useTodos } from './hooks/useTodos';

const initTodosState = JSON.parse(localStorage.getItem('todos')) || []
const filterFromStorage = localStorage.getItem('filter') || 'all';

export function App() {

  const {
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
  } = useTodos(initTodosState, filterFromStorage)
  return (
    <>
      <div className='container'>
        <h1>To Do List</h1>
        <header className='header'>
          <Form onSubmit={createTodo}/>
        </header>
            <Filter 
            filters = {filters}
            onChange={handleFilterChange}
            currentValue={filter}/> 
        <main>
          {hasTodos ? (
            <>
              <List list={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />
              <Footer completedTask={completedTodos.length} totalTask={totalTodos}
              onDeleteCompleted={() => {
                const updatedList = todos.filter((todo) => !todo.completed)
                setTodos(updatedList)
              }}/>
            </>
          ) : (
            <p>No hay tareas para mostrar</p>
          )}
        </main>
      </div>
    </>
  )
}