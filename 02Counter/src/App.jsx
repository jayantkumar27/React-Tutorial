import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  const counter =15
 

  return (
    <>
     <h1>React Tutorial</h1>
     <h2>Number Counter = {counter}</h2>
     <button >Add one Number</button>
     <button >Subract one Number</button>
    </>
  )
}

export default App
