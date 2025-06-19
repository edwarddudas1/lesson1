import styled from 'styled-components';
import { FaMapMarkerAlt, FaUser, FaClock, FaPlay, FaStop } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:rgb(104, 104, 104);
  
`;

const Box = styled.div`
  background-color:rgb(240, 208, 160);
  border: 5px solid rgb(222, 178, 120);
  width: 500px;

`

const Title = styled.h2`
  color: black;
`;

const Text = styled.p`
  color:rgb(73, 71, 71);
  font-weight: 500;
`;

export default function Event({ name, location, speaker, type, start, end }) {
  return (
    <>
      <Container>
          <Box>
            <Title> {name}</Title>
            <Text><FaMapMarkerAlt /> {location}</Text>
            <Text><FaUser /> {speaker}</Text>
            <Text><FaClock /> {type}</Text>
            <Text><FaPlay /> Start: {start}</Text>
            <Text><FaStop /> End: {end}</Text>
          </Box>
      </Container>
    </>
  );
}