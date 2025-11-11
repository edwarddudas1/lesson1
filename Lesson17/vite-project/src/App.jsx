import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import Navigation from "./components/Navigation";
import SignupForm from "./components/SignupForm";
import Clock from "./components/Clock";
import Pokemon from "./components/Pokemon";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

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
        <Navigation />

        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/colorpicker"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/pokemon" element={<Pokemon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
