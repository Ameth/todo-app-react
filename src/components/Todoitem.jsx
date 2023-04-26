import React from 'react'

// bg-gray-400 opacity-60

function Todoitem({ text, completed, description = null }) {
  const handleComplete = () => {
    console.log('Completado!')
  }

  const handleDelete = () => {
    console.log('Delete!')
  }

  return (
    <li className='relative'>
      <a
        href='#'
        className={`block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-300 ${
          completed && 'bg-gray-400 opacity-60'
        }`}
        onClick={handleComplete}
      >
        {completed ? '✅' : '🟩'}
        <strong className={`font-medium text-white ${completed && 'line-through'}`}> {text}</strong>

        {description && (
          <p className='mt-1 text-xs font-medium text-gray-300'>
            {description}
          </p>
        )}
      </a>
      <span
        className='absolute top-0 right-0 mx-1 my-1 p-1 cursor-pointer'
        onClick={handleDelete}
      >
        ❌
      </span>
    </li>
  )
}

export { Todoitem }
