import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default App;
