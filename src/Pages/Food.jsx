import "./food.scss";
import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Search from "../Components/Search/Search";

function Food() {
  return (
    <div className="food-bg">
      <TopBar />
      <Search />
    </div>
  );
}
export default Food;
