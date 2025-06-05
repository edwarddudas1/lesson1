import Data from "../upcoming-events.json";
import Event from "./Event.jsx";

export default function PageBoard({ events = Data }) {
  return (
    <>
      <h1>hi</h1>

      {events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          start={event.time.start}
          end={event.time.end}
        ></Event>
      ))}
    </>
  );
}