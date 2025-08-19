import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white")

  
  return (
    <div style={{height:"100vh", backgroundColor:backgroundColor}}>
      <button onClick={() => setBackgroundColor("red")}>Red</button>
      <button onClick={() => setBackgroundColor("blue")}>Blue</button>
      <button onClick={() => setBackgroundColor("yellow")}>Yellow</button>
    </div>
  )
}

export default App
