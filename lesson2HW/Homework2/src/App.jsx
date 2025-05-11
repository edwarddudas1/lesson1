import React from 'react'
import './App.css'
import Greeting from './Greeting'
import Message from './Message'
import Button from './Button'

function App() {
const handleClick = () => {
    console.log("Кнопка натиснута")
  }




return (
  <>
    <Greeting name="Іван"/>
    <Message text="2"/>
    <Button onClick={handleClick}/>
  </>
);
};

export default App
