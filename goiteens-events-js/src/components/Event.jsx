import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color:rgb(240, 208, 160);
  border: 4px solid rgb(222, 178, 120);
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
    <Container>
        <Box>
          <Title>{name}</Title>
          <Text>Location: {location}</Text>
          <Text>Speaker: {speaker}</Text>
          <Text>Type: {type}</Text>
          <Text>Start: {start}</Text>
          <Text>End: {end}</Text>
        </Box>
    </Container>
  );
}