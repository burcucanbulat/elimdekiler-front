import React from "react";
import "../FoodCard/foodcard.scss";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function FoodCard(props) {
  let history = useHistory();
  let location = useLocation();
  return ( 
    <div className="food-card row">
    {props.data.map((element) => {
    return (
      <div className="card-style col-4">
        <div className="card__container--inner--card col-4">
          <img src={element.image} alt="hero_img" />
        <h2>{element.name}</h2>
          <button
            className="btn btn-success"
            onClick={() => {
              if(location.pathname == '/food'){
              history.push(`/FoodDetails/${element.id}`);
              }
              else{
                history.push(`CareDetails/${element.id}`)
              }
            }}
          >
            Görüntüle
          </button>
        </div>
      </div>
          );
        })}
    </div>
  );
}
export default FoodCard;
