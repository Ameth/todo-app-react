import React from 'react'

// bg-gray-400 opacity-60

function TodoItem({
  text,
  completed,
  description = null,
  onComplete,
  onDelete,
}) {
  return (
    <li className='relative h-20 min-h-full w-96 min-w-fit'>
      <a
        href='#'
        className={`block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-300 ${
          completed && 'bg-gray-400 opacity-60'
        }`}
        onClick={onComplete}
      >
        {completed ? '✅' : '🟩'}
        <strong
          className={`font-medium text-white ${completed && 'line-through'}`}
        >
          {' '}
          {text}
        </strong>

        {description && (
          <p className='mt-1 text-xs font-medium text-gray-300'>
            {description}
          </p>
        )}
      </a>
      {!completed && <span
        className='absolute top-0 right-5 mx-1 my-1 p-1 cursor-pointer'
        title='Editar'
      >
        📝
      </span>}
      <span
        className='absolute top-0 right-0 mx-1 my-1 p-1 cursor-pointer'
        onClick={onDelete}
        title='Eliminar'
      >
        ❌
      </span>
    </li>
  )
}

export { TodoItem }
