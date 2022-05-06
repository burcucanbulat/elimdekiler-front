import React, { Component } from "react";
import Card from "../Components/Card";
import "../sass/pages/_home.scss";
import TopBar from "../Components/TopBar/TopBar";
import "../Pages/recipes.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataForBackPacking = [
  { url: "https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg" },
  {
    url: "https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg",
  },
];

const dataTop = [
  {
    url: "https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg",
  },
  { url: "https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg" },
  {
    url: "https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg",
  },
  {
    url: "https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg",
  },
];

export default class App extends Component {
  render() {
    return (
      <>
        <div className="recipes-bg">
          <TopBar />

          <Card title="Haftanın Yemekleri" data={dataTop} />
        </div>
      </>
    );
  }
}
