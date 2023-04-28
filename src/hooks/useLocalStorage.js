import { useState } from 'react'

export function useLocalStorage(itemName) {
  const localItem = localStorage.getItem(itemName)
  const currentTodos = localItem ? JSON.parse(localItem) : []

  const [item, setItem] = useState(currentTodos)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}
