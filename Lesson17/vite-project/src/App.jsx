import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./components/Counter";

const containerStyles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" component={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
