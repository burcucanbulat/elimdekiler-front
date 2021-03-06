import React from "react";
import Slider from "react-slick";
import TopBar from "../Components/TopBar/TopBar";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import "../Components/card.scss";
import { useHistory, useLocation } from "react-router-dom";

export default function Card({ title, data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  let history = useHistory();
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div className="card__container">
      <h1>{title}</h1>
      <Slider {...settings} className="card__container--inner">
        {data.map((item, index) => {
          return (
            <div className="card__container--inner--card" key={index}>
              <img src={item.image} alt="hero_img" />

              <h2>{item.name}</h2>
              <button
                className="btn btn-success"
                onClick={() => {
                if(location.pathname == "/Recipes"){
                  history.push(`/FoodDetails/${item.id}`);
                }else{
                  history.push(`/CareDetails/${item.id}`);
                }
                 
                }}
              >
                Görüntüle
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
