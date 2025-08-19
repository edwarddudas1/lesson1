import stickers from '../stickers.json'
import Sticker from './Sticker'
import styled from 'styled-components';

export default function StickerList({textSelect}) {
    const StickerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    `;
    const Title = styled.h1`
    `;


    return(
        <div className="sticker-list">
            <Title>Sticker List</Title>
            <StickerBox>
                {stickers.map((sticker, index) => (
                    <Sticker key={index} img={sticker.img} label={sticker.label} onClick={textSelect}/>
                ))}
            </StickerBox>
        </div>
    )
}