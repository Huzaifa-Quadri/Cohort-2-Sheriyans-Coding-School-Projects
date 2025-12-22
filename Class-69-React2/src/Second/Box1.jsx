import React from 'react'
import Toggle_Button from './Toggle_Button'
import TennisCourt from '../assets/tennis-court.png' 
const Box1 = () => {
  return (
    <div className='box1'>
        <img src={TennisCourt} alt="Tennis Court" />
        <p>Professional hard courts <span>with tournament-grade lightning & climate control - play in</span> perfect conditions, in any season.</p>

        <div className="game-mode">
            <Toggle_Button />
            <p>Game Mode</p>
        </div>

    </div>
  )
}

export default Box1