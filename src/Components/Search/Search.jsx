import React, { useRef } from "react";
import "../Search/search.scss";
import TagsInput from "../TagsInput";
import "../tagsInput.scss";
import FoodCard from "../FoodCard/FoodCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const [searchByIngredient, setSearchByIngredient] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const[searchPersonalCare, setSearchPersonalCare] = useState([]);
  let location = useLocation();
  console.log(location.pathname);

  function handleSelectedTags(items) {
    setIngredients(items);
  }
  useEffect(() => {
    if(ingredients.length != 0){
  fetch(`http://localhost:8080/api/personal-care-recipes/ingredients/${ingredients}`)
  .then((res) => res.json())
  .then((result) => {
    setSearchPersonalCare(result);
  });
}
else{
setSearchPersonalCare(ingredients);
}
}, [ingredients]);

  
    useEffect(() => {
      if(ingredients.length != 0){
    fetch(`http://localhost:8080/api/food-recipes/ingredients/${ingredients}`)
    .then((res) => res.json())
    .then((result) => {
      setSearchByIngredient(result);
    });
  }
  else{
  setSearchByIngredient(ingredients);
  }
  }, [ingredients]);

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
            { location.pathname == '/food' ? (
             <FoodCard data={searchByIngredient} />
            ) : (
              <FoodCard data={searchPersonalCare} />
            )
              
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
