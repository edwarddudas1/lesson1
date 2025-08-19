import './App.css'
import StickerList from './components/StickerList'
import Choice from './components/Choice'
import  './stickers.json'

import { useState } from 'react'

function App() {

  const [chosenSticker, setChosenSticker] = useState(null)


  const handleText = (label) =>{
    console.log('Sticker selected')
    setChosenSticker(label)
  }
  return (
    <>
     <StickerList textSelect={handleText}/>
      <Choice selectedSticker={chosenSticker}/>
    </>
  )
}

export default App
