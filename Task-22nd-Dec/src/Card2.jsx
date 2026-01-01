import React from 'react'
import { User } from 'lucide-react'
import CardButton from './Components/Card-Button'

const Card2 = () => {
  return (
    <div className='h-fit w-70 bg-white flex flex-col items-center py-4 relative'>
        <div className="text-md font-bold text-black absolute top-2 right-2 z-10  ">$50/hr</div>
        <img src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" className='h-30 w-30 rounded-full mt-4 mb-4' />   

        <div className="flex flex-col items-center gap-1.5">
            <h1 className='text-lg font-bold'>Jenifer Smith</h1>
            <p className='text-sm text-gray-500'>Interactive Designer</p>
            <div className="flex items-center gap-1">
                <User className='text-green-500'/>
                <p className='text-sm text-green-500'>Freelancer</p>
            </div>
        </div>
        <div className="flex items-center gap-2 py-3">
            <CardButton name="UI" />
            <CardButton name="UX" />
            <CardButton name="Photoshop" />
            <CardButton name="+4" />
        </div>

        <p className='text-sm text-gray-500 text-center'>Jeniffer is an interactive designer who is awesome at what she does</p>

        <hr className='w-1/4 h-px bg-gray-200 my-3' />

        <p className='text-sm font-bold text-gray-900'>VIEW PROFILE</p>

        
    </div> 
    
  )
}

export default Card2