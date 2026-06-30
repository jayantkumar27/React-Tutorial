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
phir usko react ka createRoot karte hai phir root variable mai store kara sakte hai ya phir seedha
refference deke React ka render use kar sakte hai


isse hi Phir humara Virtual Dom Banata 

aur isko hi use karke hum page mai cheezo ko add karte hai aur nikalte hai 
jisse lagta hai ki hum alag alag page pe jaate hai 
like in url /profile ya /Contacts ya /Skill

Isko hi SPA kahte hai 
Single Page Application
 */