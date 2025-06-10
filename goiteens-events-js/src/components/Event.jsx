import styled from 'styled-components'


const Title = styled.h2`
  color: #000;
`;
const EventContainer = styled.div`
  background-color: rgba(255, 251, 142, 0.8);
  border: 2px solid rgba(166, 183, 43, 0.53);
  width: 300px;
  border-radius: 15px;
`;
export default function Event({name, location, speaker,type,start,end}) {
    return (

        <EventContainer className="event-container">
        <Title>{name}</Title>
        <p>location: {location}</p>
        <p>speaker: {speaker}</p>
        <p>type: {type}</p>
        <p>start: {start}</p>
        <p>end: {end}</p>
      </EventContainer>
    )

}