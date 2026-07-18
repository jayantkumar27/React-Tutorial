import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='w-full flex justify-center'>

   <h1 className='inline-block bg-amber-500 text-2xl px-3 py-1.5'>The CodeGuy</h1>
   </div>
   </>
  )
}

export default App
