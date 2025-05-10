import React from 'react'
import './App.css'

function Button({onClick, children}) {

  return (
    <>
      <button onClick={onClick}>
        {children}
      </button>
    </>
  )
}

export default Button