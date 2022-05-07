import React, { Component } from "react";
import Card from "../Components/Card";
import "../sass/pages/_home.scss";
import TopBar from "../Components/TopBar/TopBar";
import "../Pages/recipes.scss";
import "../services/FoodRecipeService";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodRecipeService from "../services/FoodRecipeService";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        foodRecipes:[]
    }
  }
  
  componentDidMount(){
    FoodRecipeService.getFoodRecipes().then((response)=>{
      this.setState({foodRecipes: response.data})
    });
  }
  render() {
    return (
      <>
        <div className="recipes-bg">
          <TopBar />

          <Card title="Haftanın Yemekleri" data={this.state.foodRecipes} />
        </div>
      </>
    );
  }
}
