import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "../Components/RecipeReviewCard";
import Grid from '@mui/material/Grid';

function PersonalCareIngredients() {
  const [personalCareIngredient, setpersonalCareIngredient] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/api/personal-care-recipes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setpersonalCareIngredient(result);
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
        image={personalCareIngredient.image}
        name={personalCareIngredient.name}
        description={personalCareIngredient.description}
        ingredients={personalCareIngredient.ingredients}
      />
      </Grid>

    </div>

  );
}
export default PersonalCareIngredients;
