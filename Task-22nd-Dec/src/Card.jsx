import React from 'react'
import verifyImg from './assets/green-verify.png'
import { User } from 'lucide-react'
import { IoBookmarks } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
const Card = () => {
  return (
    <div className='h-fit w-60 bg-white rounded-4xl flex flex-col'>
        <div className='h-3/4 w-full p-1'>
        <img className='h-full w-full object-cover rounded-4xl' src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="woman" />
        </div>

        <div className='flex items-center gap-1 mt-2 px-4'>
            <h1 className='text-lg font-semibold'>Sophie Bennet</h1>
            <img className='h-5 w-5' src={verifyImg} alt="verified" />
        </div>

        <p className='text-sm text-gray-500 px-4 mt-2'>Product designer who focuses on simplicity and usablility</p>

        <div className='flex items-center justify-between px-4 my-3'>
            <div className='flex items-center gap-1'>
                <User />
                <p className='text-sm text-black'>12</p>
            </div>
            <div className='flex items-center gap-1'>
                <IoBookmarks />
                <p className='text-sm text-black'>48</p>
            </div>

            <button className="bg-gray-300 text-black text-sm px-4 py-2 rounded-3xl flex items-center gap-1 hover:bg-black hover:text-white hover:cursor-pointer">Follow <FiPlus /></button>
        </div>
    </div>
  )
}

export default Card