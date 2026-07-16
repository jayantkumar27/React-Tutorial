import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-s-0 px-2'>

        </div>
    </div>
    </>
  )
}

export default App
