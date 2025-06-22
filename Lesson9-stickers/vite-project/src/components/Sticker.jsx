export default function Sticker({ img, label}) {
    return (
        <>
        <div onClick={() => onClick()} className="sticker">
           <img src={img} alt={label} />
        </div>
        </>
    )
}