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




/*
RENDERING
Rendering actually means

React executes your component function to figure out what the UI should look like.

The browser update happens afterwards.

Think of it like

Component executes
        ↓
React gets JSX
        ↓
React compares old UI vs new UI
        ↓
Browser updates only necessary parts

Rendering is thinking.

DOM update is acting.

These are different steps.







When rendering, React roughly does this:

Run component
        ↓
Get JSX
        ↓
Convert JSX to React Elements (objects)
        ↓
Build Virtual DOM tree
        ↓
Compare with previous tree
        ↓
Find differences
        ↓
Update Real DOM

Notice the browser is involved only in the final step.












People hear

React re-renders

and imagine

Everything runs again.

Everything updates.

Everything flashes.


Only the first part is true.

When state changes:

Component function runs again.

But the browser only updates what actually changed.
*/