import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
document.getElementById('root')  isse hum index.html ke andar se root id ke refference lete hai
 */