import { Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
    </Switch>
  );
}

export default App;
