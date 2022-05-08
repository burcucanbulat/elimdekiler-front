import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../Components/RecipeReviewCard";
import Grid from '@mui/material/Grid';

function Ingredients() {
  const [foodIngredient, setFoodIngredient] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/api/food-recipes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setFoodIngredient(result);
      });
  }, []);

  return (
    <div className="food-bg">
      <TopBar />
      <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"

>
      <RecipeReviewCard
        image={foodIngredient.image}
        name={foodIngredient.name}
        description={foodIngredient.description}
        ingredients={foodIngredient.ingredients}
      />
      </Grid>

    </div>

  );
}
export default Ingredients;
