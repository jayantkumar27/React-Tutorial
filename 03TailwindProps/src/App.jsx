import { useState } from 'react'

import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)


   let myObj = {
    username: "Jayant",
    age: 21
  }
  let newArr = [1, 2, 3

  

  return (
  <div className='w-full flex items-center flex-col gap-4'>
  <h1 className="inline-block bg-blue-300 !text-black text-2xl px-3 py-1 rounded-2xl">
    {/* text-black nhi ho raha tha most probably global mai kuch dark colour setting ke wajah se
    lekin ! laga ke isko important tag mil jata hai aur ye override kar deta global ya kuch aur wale ko 
    The ! Modifier: Writing !text-black compiles to color: #000000 !important; in CSS. This is the quickest way to force the color change when custom global styles or third-party CSS are interfering.
    */}
    The CodeGuy 
  </h1>
  <Card world="Earth" realm="MCU"  btnText="DEKHO MUJHE" />
  <Card world="blue star "  realm ="DCU" btnText="GHUROO MUJHE"/>
</div>
  )
}

export default App
