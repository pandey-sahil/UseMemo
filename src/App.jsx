import React from 'react'
import { useState } from 'react'
import Nav from './components/Nav'


const App = () => {
  const [count, setcount] = useState(0)
  const [navdata, setNavdata] = useState("data of nav")
  return (
    
    <div className='bg-slate-400 p-10 m-5 rounded'>
      <Nav navdata={navdata} />
      <h1 className='text-5xl mb-6'>{count}</h1>
      <div className='flex gap-5  text-white text-[1rem] font-semibold'>
      <button onClick={() => {setcount(count+1)}} className='bg-blue-500 px-6 py-2 rounded'>Add + 1</button>
      <button onClick={() => {setNavdata("data changed!")}} className='bg-blue-500 px-6 py-2 rounded'>Nav change</button>
      </div>
    </div>
  )
}


export default App