import React from "react";
import "../Search/search.scss";
import TagsInput from "../TagsInput";
import "../tagsInput.css"
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
   <div className="App">
    <TagsInput
      selectedTags={handleSelectedTags}
      fullWidth
      variant="outlined"
      id="tags"
      name="tags"
      placeholder=""
      label="Elimdekiler"
    />
  </div>
  )
}
export default Search;
