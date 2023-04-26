import React from 'react'

function TodoSearch() {

  const handleSearch = (event) => {
    console.log(event.target.value);
  }
  return (
    <label
      htmlFor='UserEmail'
      className='relative block overflow-hidden rounded-md border text-white border-gray-200 px-3 pt-3 my-4 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600'
    >
      <input
        type='email'
        id='UserEmail'
        placeholder='Email'
        className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
        onChange={handleSearch}
      />

      <span className='absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
        Buscar...
      </span>
    </label>
  )
}

export { TodoSearch }
