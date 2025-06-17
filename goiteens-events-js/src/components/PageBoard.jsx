import event from './Event'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex: 1 1;
`

const Title = styled.h2`
  color: black;
`
const Text = styled.p`
color: grey;
font-weight: 500;
`

export default function Event({name, location, speaker,type,start,end}) {
    return (

        <Container>
                <Title className="event-name">{name}</Title>
                <Text className="event-location">Location: {location}</Text>
                <Text className="event-speaker">Speaker: {speaker}</Text>
                <Text className="event-type">Type: {type}</Text>
                <Text className="event-start">Start: {start}</Text>
                <Text className="event-end">End: {end}</Text>
        </Container>
    )

}