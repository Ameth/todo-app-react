import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
  
  return (
    <TodoContext
      value={{
        item,
        saveItem,
        loading,
      }}
    >
      {children}
    </TodoContext>
  )
}
