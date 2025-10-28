import { Switch, Route } from "react-router";
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
      <AppBar />

      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
}
