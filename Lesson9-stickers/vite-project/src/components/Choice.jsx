import styled from 'styled-components';
export default function Choice({ selectedSticker }) {

    const TextChoice = styled.p`
    font-size: 50px;
    `;

  return (
    <>
      <div>
        {selectedSticker ? 
          <TextChoice>Seleted sticker is {selectedSticker}</TextChoice>
         : 
          <TextChoice>No sticker selected</TextChoice>
        }
      </div>
    </>
  );
}