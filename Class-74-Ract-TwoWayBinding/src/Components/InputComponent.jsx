import React from 'react'

const InputComponent = (info) => {
  return (
    <div className='flex items-center gap-3'>
        <p className='text-green-500 text-2xl'>{info.name} : </p>
        <input type={info.type} placeholder={info.placeholder} className='bg-white text-black text-bold border-2 border-white rounded-xl p-2 w-[10 rem]'/>
    </div>
  )
}

export default InputComponent