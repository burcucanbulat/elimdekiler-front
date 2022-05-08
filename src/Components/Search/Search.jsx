import React from "react";
import "../Search/search.scss";
import TagsInput from "../TagsInput";
import "../tagsInput.scss";
import FoodCard from "../FoodCard/FoodCard";
import { useEffect, useState } from "react";

function Search() {
  const [foodIngredient, setFoodIngredient] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/food-recipes`)
      .then((res) => res.json())
      .then((result) => {
        setFoodIngredient(result);
      });
  }, []);

  function handleSelectedTags(items) {
    console.log(items);
  }
  return (
    <div className="App container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 "></div>
        <div className="col-sm-12 col-md-6 col-lg-8 box">
          <TagsInput
            selectedTags={handleSelectedTags}
            fullWidth
            variant="outlined"
            id="tags"
            name="tags"
            placeholder=""
            label="Elimdekiler"
          />
          <div>
            <FoodCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
