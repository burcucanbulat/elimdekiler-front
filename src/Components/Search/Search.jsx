import React from "react";
import "../Search/search.scss";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";

function Search() {
  const [tags, setTags] = React.useState(["example tag"])
  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}
export default Search;
