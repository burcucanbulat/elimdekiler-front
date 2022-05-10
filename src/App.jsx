import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Recipes from "./Pages/Recipes";
import Food from "./Pages/Food";
import PersonalCareRecipes from "./Pages/PersonalCareRecipes";
import PersonalCareIngredients from "./Pages/PersonalCareIngredients";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ingredients from "./Pages/Ingredients";
import PersonalCare from "./Pages/PersonalCare";
import FoodDetails from "./Pages/FoodDetails";
import CareDetails from "./Pages/CareDetails";

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
        <Route path="/PersonalCareRecipes">
          <PersonalCareRecipes />
        </Route>
        <Route path="/Food">
          <Food />
        </Route>
        <Route path="/PersonalCare">
          <PersonalCare />
        </Route>
        <Route path="/Ingredients/:id">
          <Ingredients />
        </Route>
        <Route path="/PersonalCareIngredients/:id">
          <PersonalCareIngredients />
        </Route>
        <Route path="/FoodDetails/:id">
          <FoodDetails />
        </Route>
        <Route path="/CareDetails/:id">
          <CareDetails />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
