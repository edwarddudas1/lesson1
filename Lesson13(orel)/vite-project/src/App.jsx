import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState("")
  const flipCoin = () =>{
    const randomNumber = Math.random() <0.5 ? 'Орел' : 'Решка'
    setResult(randomNumber)
  }
  return (
    <>
      <button onClick={flipCoin} >Підкинути монетку</button>
      <p>{result}</p>
    </>
  )
}

export default App
