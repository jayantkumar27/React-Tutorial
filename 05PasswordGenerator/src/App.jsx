import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='w-full flex justify-center'>

   <h1 className='inline-block bg-amber-500'>The CodeGuy</h1>
   </div>
   </>
  )
}

export default App
