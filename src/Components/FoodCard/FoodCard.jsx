import React from "react";
import "../FoodCard/foodcard.scss";
import { useHistory } from "react-router-dom";

function FoodCard() {
  let history = useHistory();
  return (
    <div className="food-card row">
      <div className="card-style col-4">
        <div className="card__container--inner--card col-4">
          <img src="{item.image}" alt="hero_img" />

          <h2>Yemek</h2>
          <button
            className="btn btn-success"
            onClick={() => {
              history.push("/FoodDetails");
            }}
          >
            Görüntüle
          </button>
        </div>
      </div>
      <div className=" card-style col-4">
        <div className="card__container--inner--card col-4">
          <img src="{item.image}" alt="hero_img" />

          <h2>Yemek</h2>
          <button className="btn btn-success">Görüntüle</button>
        </div>
      </div>
      <div className=" card-style col-4">
        <div className="card__container--inner--card col-4">
          <img src="{item.image}" alt="hero_img" />

          <h2>Yemek</h2>
          <button className="btn btn-success">Görüntüle</button>
        </div>
      </div>
    </div>
  );
}
export default FoodCard;
