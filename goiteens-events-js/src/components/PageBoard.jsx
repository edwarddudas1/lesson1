import styled from "styled-components";
import Event from "./Event";
import eventsData from "../upcoming-events.json";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1; 
  background-color:rgb(179, 179, 179);
  border: 5px solid rgb(131, 131, 131);
  border-radius: 15px;

`
const Box = styled.ul`
margin-left: 50px;
margin-top: 50px;
margin-bottom: 50px;
`
const Title = styled.h2`
  color: black;
  font-weight: 600;
  background-color: rgb(124, 196, 244);
  border: 5px solid rgb(65, 138, 248);
`;


export default function PageBoard({ events = eventsData }) {
  return (
    <>
    <Title>24th Core Worlds Coalition Conference</Title>
      <Container>
      {events.map((event, index) => (
        <Box key={index}>
          <Event
            name={event.name}
            start={event.time.start}
            end={event.time.end}
            location={event.location}
            speaker={event.speaker}
          />
        </Box>
      ))}
    </Container>
    </>
  );
}