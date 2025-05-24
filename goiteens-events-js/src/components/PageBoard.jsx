import Data from '../upcoming-events.json';

export default function PageBoard({events = Data}) {
    return (
        <>
        <h1>Hi</h1>

        {events.map((event, index) => (
            <Event key={index} name={event.name}> </Event>
        ))}
        </>
    );
}