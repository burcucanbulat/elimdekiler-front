import "./personalCare.scss";
import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Search from "../Components/Search/Search";

function PersonalCare() {
  return (
    <div className="care-bg">
      <TopBar />
      <Search />
    </div>
  );
}
export default PersonalCare;
