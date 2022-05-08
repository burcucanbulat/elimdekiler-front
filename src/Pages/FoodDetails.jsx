import React from "react";
import "./foodDetails.scss";
import TopBar from "../Components/TopBar/TopBar";

function FoodDetails() {
  return (
    <div>
      <TopBar style={{ color: "red" }} />
      <div className="row">
        <div className="col-6">
          <img src="" alt="hero_img" />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default FoodDetails;
