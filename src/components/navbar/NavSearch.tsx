export function NavSearch() {
  return (
    <form className='focus-within:outline outline-offset-2 outline-2 outline-green-600 bg-zinc-800 p-1 mx-1 rounded-md text-zinc-500 font-inter flex w-full md:w-60 lg:w-80'>
        <label htmlFor="searchbar"><i className="fa-solid fa-magnifying-glass aspect-square p-2"></i></label>
        <input className='outline-none bg-transparent w-full text-white' id='searchbar' type="text" placeholder='Type here...' />
        <button className='bg-green-700 hover:bg-green-600 transition:background duration-100 ease-in-out text-zinc-200 py-1 px-3 ml-auto rounded-md shadow-sm'>Search</button>
    </form>
  )
}
