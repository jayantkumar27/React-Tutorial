import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [passwrd, setpasswrd] = useState("")
  const [length,setLength]=useState(8)
  const [numberallowed,setNumberllowed]=useState(false)
  const [charallowed,setCharallowed]=useState(false)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str+="1234567890"
    if (charallowed) str+="!@#$%^&*-_+=[]{}~`"
    
    for (let i=1 ; i<= length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass+= str.charAt(char)
    }
    setpasswrd(pass)

  },[length,numberallowed,charallowed,setpasswrd])

  return (
   <>
   

   <div className='w-full  flex  flex-col items-center'>

   <h1 className='inline-block bg-cyan-400 text-2xl text-black  px-3 py-1.5 rounded-3xl '
   
   >The CodeGuy &lt;/&gt;   </h1>

   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadoe rounded-lg overflow-hidden mb-4'>
         <input 
         type="text" 
         value={passwrd}
         className='outline-none w-full py-1 px-3 bg-gray-400 text-white'
         placeholder='Password'
         readOnly
         />
         <button 
         className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          COPY
         </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label >Length:{length}</label>

      </div>
    </div>
   </div>

   
   </div>
 
   </>
  )
}

export default App
