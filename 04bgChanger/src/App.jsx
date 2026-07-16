import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap  justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button
              onClick={()=> setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-red-500 shadow-lg'>
                Red
              </button>
              <button
              onClick={()=> setColor("Blue")}
              className='outline-none px-4 py-1 rounded-full text-blue-400 shadow-lg'>
                Blue
              </button>
              <button
              onClick={()=> setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-green-300 shadow-lg'>
                Green
              </button>
              <button
              onClick={()=> setColor("Yellow")}
              className='outline-none px-4 py-1 rounded-full text-yellow-400 shadow-lg'>
                Yellow
              </button>
              <button
              onClick={()=> setColor("Orange")}
              className='outline-none px-4 py-1 rounded-full text-orange-400 shadow-lg'>
                Orange
              </button>
              

         </div>
        </div>
    </div>
    </>
  )
}

export default App
