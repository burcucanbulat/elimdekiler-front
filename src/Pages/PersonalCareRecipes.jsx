import React, { Component } from "react";
import Card from "../Components/Card";
import "../sass/pages/_home.scss";
import TopBar from "../Components/TopBar/TopBar";
import "../Pages/recipes.scss";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonalCareRecipeService from "../services/PersonalCareRecipeService";

export default class PersonalCareRecipes extends Component {
  constructor(props){
    super(props)
    this.state = {
        personalCareRecipes:[]
    }
  }
  
  componentDidMount(){
    PersonalCareRecipeService.getPersonalCareRecipes().then((response)=>{
      this.setState({personalCareRecipes: response.data})
    });
  }
  render() {
    return (
      <>
        <div className="recipes-bg">
          <TopBar />

          <Card title="Önerilen Kişisel Bakımlar" data={this.state.personalCareRecipes} />
        </div>
      </>
    );
  }
}
