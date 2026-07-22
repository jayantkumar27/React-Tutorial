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

   
   </div>
 
   </>
  )
}

export default App
