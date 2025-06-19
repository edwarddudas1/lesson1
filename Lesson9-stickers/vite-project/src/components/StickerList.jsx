import stickers from '../stickers.json' 
export default function Stickers(){
    console.log("hi")

    
return(
    <div>
        {stickers.map((sticker, index) => (
            <Sticker key={index} img={sticker.img} label={sticker.label}/>
        ))}
    </div>
)
}