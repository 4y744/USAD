export function NavToggle(props : {toggle : any}) {
  return (
    <button onClick={props.toggle} className='flex md:hidden justify-center items-center flex-col aspect-square rounded-md active:outline outline-2 outline-green-600 hover:bg-zinc-800'>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-zinc-300'/>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-zinc-300'/>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-zinc-300'/>
    </button>
  )
}
