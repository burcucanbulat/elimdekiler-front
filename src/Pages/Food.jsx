import "./food.scss";
import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Search from "../Components/Search/Search";

function Food() {
  return (
    <div className="food-bg">
      <TopBar />
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Food;
