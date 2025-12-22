import React from 'react'
import { MoveUpRight } from 'lucide-react';
const Nav = () => {
  return (
    <div>
        <nav>
            <h2>Horizon Courts</h2>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Coahes</li>
                <li>Events</li>
                <li>Contacts</li>
            </ul>

            <button>
                Book now <MoveUpRight />
            </button>
        </nav>
    </div>
  )
}

export default Nav