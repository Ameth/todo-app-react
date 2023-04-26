import React, { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton'
import { Todoitem } from './components/Todoitem'
// import './App.css'

const todos = [
  {
    text: 'Revisar direcciones',
    description:'Cambiar los valores del GPS correctamente',
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
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
    <h1 className='text-6xl text-white font-bold'>Your task</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => (
          <Todoitem key={index} text={todo.text} completed={todo.completed} description={todo.description} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  )
}

export default App
