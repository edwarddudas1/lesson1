import React from 'react'
import './App.css'

function Greeting(props) {

  return (
    <>
      <h1>Привіт,{props.name}!</h1>
    </>
  )
}

export default Greeting