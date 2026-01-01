import React from 'react'

const CardButton = (prop) => {
  return (
    <div className='bg-gray-300 text-black text-sm px-2 py-1 rounded-2xl flex items-center gap-1 hover:bg-black hover:text-white hover:cursor-pointer'>{prop.name} </div>
  )
}

export default CardButton