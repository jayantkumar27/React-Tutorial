import { useState } from 'react'

import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  

  return (
  <div className="w-full flex justify-center">
  <h1 className="inline-block bg-blue-300 text-4l px-6 py-9 rounded-full">
    The CodeGuy
  </h1>
</div>
  )
}

export default App
