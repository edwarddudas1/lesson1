import styled from 'styled-components';

export default function Sticker({ img, label, onClick }) {
    const Sticker = styled.div`
    background-color: #23614b;
    border: 5px solid transparent;
    border-radius: 8px;
    box-shadow: 0 15px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;   
    transition: transform 0.3s ease;

        &:hover {
        transform: scale(1.2);
    } 
    margin: 100px
    `;
    
  return (
    <>
      <Sticker onClick={() => onClick(label)} className="sticker">
        <img src={img} alt={label} />
      </Sticker>
    </>
  );
}