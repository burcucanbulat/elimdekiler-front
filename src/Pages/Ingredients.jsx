import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

function Ingredients() {
  const [foodIngredient, setFoodIngredient] = useState([]);
  const {id} = useParams();
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
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={foodIngredient.image}/>
</Card>
</div>
  );
}
export default Ingredients;
