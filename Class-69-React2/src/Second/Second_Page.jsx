import React from 'react'
import './Second.css';
import Box1 from './Box1.jsx';
import Box2 from './Box2.jsx';
import Box3 from './Box3.jsx';
const Second_Page = () => {
  return (
    <div className='second'>
    <div className="second-header">
      <h4>About Horizon</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia ratione nostrum voluptates consequuntur velit obcaecati, non praesentium repellendus in quisquam tempora veniam sit assumenda odit.
      </p>
    </div>
    <div className="boxes">

        <Box1/>
        <Box2/>
        <Box3/>
    </div>
    <div className="facts-header">
      <h2>A few more facts about us in numbers</h2>
    </div>
    </div>
  )
}

export default Second_Page