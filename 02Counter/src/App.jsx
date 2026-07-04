import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter,setcounter] =useState(15)


  const addValue = ()=>{
      if(counter!=20){
        setcounter(counter + 1)
    }
  }

  const removeValue = ()=>{
    if(counter!=0){
      setcounter(counter-1)
    }
  }

  return (
    <>
     <h1>React Tutorial</h1>
     <h2>Number Counter = {counter}</h2>
     <button onClick={addValue}>Add one Number</button>
     <button onClick={removeValue}>Subract one Number</button>
    </>
  )
}

export default App
