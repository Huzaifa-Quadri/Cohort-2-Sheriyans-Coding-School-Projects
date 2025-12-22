import React from 'react'
import Nav from './Nav.jsx';
import Hero_bottom from './Hero_bottom.jsx';

import './landing.css';
const Landing = () => {
  return (
    <div className='landing'>
        <Nav/>
        <div className="hero">
            <div className="hero-Content">

            <h1>Unleash Your Inner Champion Today.</h1>
            <h1>All In One Place</h1>
            <h4>Join the ultimate tennis experience - where passion meets performance. <br />and every swing brings you closer to victory.</h4>

            <button>Start your own journey</button>
            </div>

            {/* Some spacing here */}

            <Hero_bottom/>
        </div>
    </div>
  )
}

export default Landing