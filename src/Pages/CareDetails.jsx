import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import "./careDetails.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CareDetails() {
    const [personalCareIngredient, setpersonalCareIngredient] = useState([]);
    const [split, setSplit] = useState([]);

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
      fetch(`http://localhost:8080/api/personal-care-recipes/${id}`)
        .then((res) => res.json())
        .then((result) => {
          setpersonalCareIngredient(result);
          setSplit(result.ingredients.split(","));
        });
    }, []);
console.log(split);
  return (
    <div className="background">
      <TopBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <img src={personalCareIngredient.image} alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>{personalCareIngredient.name}</h2>
            <ul>
              Malzemeler
              {split.map(element => {
          return <li>{element}</li>;
        })}
            </ul>
            <p>
            {personalCareIngredient.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareDetails;
