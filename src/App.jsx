import { Switch, Route } from "react-router-dom";

import { Footer, Navbar } from "./components/Layout";
import { About, Careers, Home, Locations } from "./pages";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/careers">
          <Careers />
        </Route>
        <Route path="/location">
          <Locations />
        </Route>
        <Route path="*">
          <h1>not found</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
