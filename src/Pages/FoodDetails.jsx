import React from "react";
import "./foodDetails.scss";
import TopBar from "../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const [foodIngredient, setFoodIngredient] = useState([]);
  const [splitIngredients, setSplitIngredients] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:8080/api/food-recipes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setFoodIngredient(result);
        setSplitIngredients(result.ingredients.split(","));
      });
  }, []);
  return (
    <div>
      <TopBar style={{ color: "red" }} />
      <div className="container">
        <div className="row detail">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={foodIngredient.image} alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>{foodIngredient.name}</h2>
            <ul>
              Malzemeler
              {splitIngredients.map(element => {
          return <li>{element}</li>;
        })}
            </ul>
            <p>
             {foodIngredient.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
