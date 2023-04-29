import { useEffect, useState } from 'react'

export function useLocalStorage(itemName) {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const localItem = localStorage.getItem(itemName)
      const currentTodos = localItem ? JSON.parse(localItem) : []
      setItem(currentTodos)

      // console.log('Ejecutado efecto del localStorage')
      setLoading(false)
    }, 2000)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading }
}
