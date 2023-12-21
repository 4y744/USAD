import React from 'react'

export default function NavSearch() {
  return (
    <form className='bg-gray-700 p-1 rounded-md text-gray-500 font-inter flex w-full md:w-60 lg:w-80'>
        <label htmlFor="searchbar"><i className="fa-solid fa-magnifying-glass aspect-square p-2"></i></label>
        <input className='outline-none bg-transparent w-full text-white' id='searchbar' type="text" placeholder='Type here...' />
        <button className='bg-gray-600 text-gray-300 py-1 px-3 ml-auto rounded-md shadow-sm'>Search</button>
    </form>
  )
}
