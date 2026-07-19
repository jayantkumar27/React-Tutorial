import { useState } from 'react'
import './App.css'

function App() {
  let [passwrd, setpasswrd] = useState(0)


  

  return (
   <>
   

   <div className='w-full  flex  flex-col items-center'>

   <h1 className='inline-block bg-cyan-400 text-2xl text-black  px-3 py-1.5 rounded-3xl '
   
   >The CodeGuy &lt;/&gt;   </h1>

   <button className='bg-red-400 text-black px-2 py-1 rounded-2xl'
   onClick={()=>{
          setpasswrd(Math.ceil((Math.random()*9999)+1))
          console.log(setpasswrd)
   }}>
    Generate Password
   </button>

   <h2>Generated Password:{passwrd}</h2>

   </div>
 
   </>
  )
}

export default App
