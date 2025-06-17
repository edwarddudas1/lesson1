import styled from "styled-components";
import Event from "./Event";
import eventsData from "../upcoming-events.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1; 
`
const Box = styled.ul`
 
`


export default function PageBoard({ events = eventsData }) {
  return (
    <>
      <Container>
        <Box>
          {events.map((event, index) => (
            <Event
              key={index}
              name={event.name}
              start={event.time.start}
              end={event.time.end}
              location={event.location}
              speaker={event.speaker}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}