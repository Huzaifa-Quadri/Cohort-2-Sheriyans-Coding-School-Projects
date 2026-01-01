import React from 'react'
import { useState } from 'react'
const Thing1 = () => {

  const [a, seta] = useState(0);

  function increment() {
    seta(a+1);
  }
  function decrement() {
    seta(a-1);
  }
  return (
    <div className='board'>
      <h1>{a}</h1>
      <div className="buttons">
        <button onClick={increment}>
          +
        </button>

        <button onClick={decrement}>
          -
        </button>
      </div>

    </div>
  )
}

export default Thing1