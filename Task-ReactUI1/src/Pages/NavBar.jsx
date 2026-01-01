import React from 'react'
import { Search } from 'lucide-react'
const NavBar = () => {
  return (
    <div className='flex align-center justify-between text-[#009087] py-16'>
        <div>
            <h1 className='text-2xl font-bold'>Logo</h1>
        </div>
        <div>
            <ul className='flex align-center justify-center gap-10 list-style-none text-xl'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#"><Search /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar