import stickers from '../stickers.json' 
import Sticker from './Sticker'
export default function Stickers({textSelect}) {
    console.log("hi")

    
return (
    <div>
        {stickers.map((sticker, index) => (
            <Sticker key={index} img={sticker.img} label={sticker.label} onClick={textSelect}/>
        ))}
    </div>
)
}