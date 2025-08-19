import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  const changeColor = () => {
    if(color === 'red') {
      setColor('yellow')
    } else if(color === 'yellow'){
      setColor('green')
    } else {
      setColor('red')
    }
  }

  const styles = (circleColor) =>({
    width: '50px',
    height: '50px',
    backgroundColor: circleColor,
    opacity: color === circleColor ? 1 : 0.3
  })
    
  return (
    <>
      <div>
        <div style={styles(`red`)}></div>
        <div style={styles(`yellow`)}></div>
        <div style={styles(`green`)}></div>
      </div>

      <button onClick={changeColor}>Change color</button>
    </>
  )
}

export default App
