function CreateTodoButton({ onShowModal }) {
  return (
    <button
      className='bg-[#61DAFA] shadow-[0px_5px_25px_rgba(97,218,250,0.5)] cursor-pointer text-[50px] fixed font-[bold] text-neutral-50 flex justify-center items-center h-16 w-16 rotate-[0] transition-[0.3s] duration-[ease] rounded-[50%] border-[none] right-6 bottom-6 hover:rotate-[224deg]'
      onClick={onShowModal}
    >
      +
    </button>
  )
}

export { CreateTodoButton }
