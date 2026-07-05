import { useState } from 'react' // yaha se aur bhi cheeze la sakte hai bas usestate, use... like this
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter,setcounter] =useState(15)
  //yaha counter aur setcounter ke jagah kuch bhi rakh sakte hai 
  //like login setlogin,superman setsuperman and etc.

  const addValue = ()=>{
      if(counter!=20){  //This if is for stoping the counter to go above set number 20 
        setcounter(counter + 1)//Setcounter update everything at once , were counter was used
    }
  }

  const removeValue = ()=>{
    if(counter!=0){  //This if is to stop counter to go to negitive numbers 
      setcounter(counter-1)
    }
  }
   
  return (
    <>
     <h1>React Tutorial</h1>
     <h2>Number Counter = {counter}</h2>
     <button onClick={addValue}>Add one Number</button>
     <button onClick={removeValue}>Subract one Number</button>

     {/* hum return mai sirf ek element de sakte hai */}
    </>
  )
}

export default App
