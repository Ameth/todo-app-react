import { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Modal } from '../components/Modal'
import Loader from '../components/Loader'
// import { TodoContext, TodoProvider } from '../context'

const mockTodos = [
  {
    text: 'Revisar direcciones',
    description: 'Cambiar los valores del GPS correctamente',
    completed: false,
  },
  {
    text: 'Enviar facturas',
    completed: true,
  },
  {
    text: 'Cargar direcciones',
    completed: false,
  },
  {
    text: 'Imprimir factura de servicio',
    description: 'Teniendo en cuenta el Id que me enviaron',
    completed: true,
  },
  {
    text: 'Terminar itinerario de viaje',
    completed: false,
  },
  {
    text: 'Crear la nomina',
    description: 'Falta terminar la ultima semana',
    completed: true,
  },
  {
    text: 'Crear los usuario en el sistema nuevo',
    description:
      'Crear el listado en excel para enviar a cargarlos de forma masiva',
    completed: false,
  },
]

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage('todos_local')
  const [searchValue, setSearchValue] = useState('')
  const [showModal, setShowModal] = useState(false)

  const completedTodos = todos.filter((todo) => todo.completed).length
  const filtredTodos =
    searchValue.length > 0
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        )
      : todos

  const toogleStateTodo = (value) => {
    const todoIndex = todos.findIndex((todo) => todo.text === value)
    const newTodos = [...todos]

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const addTodo = (value) => {
    // console.log(value);
    const newTodos = [...todos]
    newTodos.push(value)
    saveTodos(newTodos)
  }

  const deleteTodo = (value) => {
    const newTodos = todos.filter((todo) => todo.text !== value)
    saveTodos(newTodos)
  }

  /* <span className='text-white flex justify-center items-center p-0 m-0'>
            Cargando listado...
          </span> */
  return (
    <Fragment>
      <h1 className='text-6xl text-white font-bold'>Your task</h1>
      <TodoCounter total={todos.length} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <Loader />}
        {!loading &&
          (filtredTodos.length > 0 ? (
            filtredTodos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                description={todo.description}
                onComplete={() => toogleStateTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))
          ) : (
            <span className='text-white flex justify-center items-center p-0 m-0'>
              {searchValue.length > 0
                ? 'No existen coincidencias'
                : 'No hay tareas todavia'}
            </span>
          ))}
      </TodoList>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} onAdd={addTodo} />,
          document.body
        )}
      <CreateTodoButton onShowModal={() => setShowModal(true)} />
    </Fragment>
  )
}

export default App
