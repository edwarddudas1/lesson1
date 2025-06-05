import './App.css'
import Statistics from "./components/Statistics"
import Data from "./data.json"

function App() {
  return (
    <>
    <Statistics title="Upload stats" stats={Data} />;

    </>
  )
}

export default App
