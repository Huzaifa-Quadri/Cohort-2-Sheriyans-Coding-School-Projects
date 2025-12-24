import React from 'react'

const Sample = () => {
  return (
    <>
      <div className="bg-green-900 h-100vh w-1/2 flex">
    
      <div className="bg-red-500 text-3xl font-bold underline">Hello World!</div>
    
      <h3 className='bg-blue-800'>My name iss King</h3>
      </div>
      <h1>{a.length}</h1>
      {/* <h1>{a.map((i) => i%2 == 0 ? i : null)}</h1> */}
      {a.map(function (i) {
        return <h1>{i % 2 === 0 ? i : null}</h1>;
      })}
    
    </>
  )
}

export default Sample