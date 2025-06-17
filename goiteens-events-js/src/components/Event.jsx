import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: black;
`;

const Text = styled.p`
  color: grey;
  font-weight: 500;
`;

export default function Event({ name, location, speaker, type, start, end }) {
  return (
    <Container>
      <Title>{name}</Title>
      <Text>Location: {location}</Text>
      <Text>Speaker: {speaker}</Text>
      <Text>Type: {type}</Text>
      <Text>Start: {start}</Text>
      <Text>End: {end}</Text>
    </Container>
  );
}