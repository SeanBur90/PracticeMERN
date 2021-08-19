import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Library from "./components/Library";
import LightEx from "./components/LightEx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/library" component={Library}></Route>
          <Route path="/light" component={LightEx}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
