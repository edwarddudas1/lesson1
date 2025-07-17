import { useState } from "react";
function Welcome(props) {
  function Counter(){
    const [count, setCount] = useState(0)
  }
  return(
    <>
    <h2>Hello, {props.name}!</h2>
    <p>Счёт {count}</p>
    <button onClick={() => setCount(count +1)}>+</button>
    </>
  )
};
export default Welcome