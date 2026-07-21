import { useState } from 'react'
import './App.css'

function App() {
  const [passwrd, setpasswrd] = useState(0)
  const [length,setLength]=useState(8)
  const [numberallowed,setNumberllowed]=useState(false)
  const [charallowed,setCharallowed]=useState(false)

  

  return (
   <>
   

   <div className='w-full  flex  flex-col items-center'>

   <h1 className='inline-block bg-cyan-400 text-2xl text-black  px-3 py-1.5 rounded-3xl '
   
   >The CodeGuy &lt;/&gt;   </h1>

   
   </div>
 
   </>
  )
}

export default App
