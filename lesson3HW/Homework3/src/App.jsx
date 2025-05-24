import './App.css'
import Statics from "./components/statistics"
import Data from "./data.json"

function App() {
  return (
    <>
    <Statistics title="Upload stats" stats={Data} />;
    <Statistics stats={Data} />;
    </>
  )
}

export default App
