export default function Choice({selectedSticker}) {

    return (
        <div>
            {selectedSticker ? <p>Selected sticker is {selectedSticker}</p> : <p>No sticker selected</p>}
        </div>
    )
}