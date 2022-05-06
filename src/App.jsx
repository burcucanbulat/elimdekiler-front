import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Recipes from "./Pages/Recipes";
import Food from "./Pages/Food";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Recipes">
          <Recipes />
        </Route>
        <Route path="/Food">
          <Food />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
