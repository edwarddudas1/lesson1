import { useState } from 'react'
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App(){
  return (
    <div className="App">
      <Greeting name="Іван" />
    </div>
  )
}


function Greeting({name}){
  return <h1>Привіт, {name}!</h1>
}

export default Greeting
