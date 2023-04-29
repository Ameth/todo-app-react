export function Modal({ onClose }) {
  return (
    <div className='bg-slate-500 fixed z-10 inset-0 bg-opacity-75 transition-opacity flex justify-center items-center'>
      <div className='bg-white p-4 flex justify-center items-center flex-col rounded-xl w-80'>
        <span className='text-2xl font-bold'>Crear nueva tarea</span>
        <input
          type='text'
          name=''
          id=''
          placeholder='Titulo'
          className='w-full h-10 mt-3 mb-3 p-3 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 my-4 shadow-sm'
        />
        <textarea
          name=''
          id=''
          cols='30'
          rows='3'
          placeholder='Descripción (opcional)'
          className='resize-none w-full mt-3 mb-3 p-3 relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 my-4 shadow-sm'
        ></textarea>
        <div className='flex items-center'>
          <button className='bg-green-400 rounded-md text-white p-3 m-2 hover:bg-green-300'>
            ✔️ Agregar
          </button>
          <button
            className='bg-gray-500 rounded-md text-white p-3 m-2 hover:bg-gray-400'
            onClick={onClose}
          >
            ❌ Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
