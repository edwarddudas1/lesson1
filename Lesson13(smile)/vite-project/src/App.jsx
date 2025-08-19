import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mood, setMood] = useState("😂")

  const changeMood = () => {
    if(mood === "😂"){
      setMood("🥲");
    } else if(mood === "🥲"){
      setMood("😡")
    }else{
      setMood("😂")
    }
  }
  return (
    <>
    <div >
      {mood}
    </div>
    <button onClick={changeMood}>Change mood</button>
    </>
  )
}

export default App
