import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")

  const handleChange = (event) =>{
    setName(event.target.value)
  }
  return (
    <>
    <input onChange ={handleChange}type="text" value={name}/>
    <p>Привіт, {name || "користувач"}</p>
    </>
  )
}

export default App
