import React from 'react'

export default function NavToggle() {
  return (
    <button className='flex md:hidden justify-center items-center flex-col aspect-square hover:bg-gray-700 rounded-md'>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-gray-300'/>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-gray-300'/>
        <div className='rounded-md w-5 h-0.5 mx-2 my-0.5 bg-gray-300'/>
    </button>
  )
}
