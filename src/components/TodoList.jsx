import React from 'react'

function TodoList({ children }) {
  return (
    <article className='rounded-xl border border-gray-700 bg-gray-800 p-4'>
      <ul className='mt-4 space-y-2'>{children}</ul>
    </article>
  )
}

export { TodoList }
