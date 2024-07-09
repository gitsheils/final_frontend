import "./Search.css";
import { useState, useEffect } from "react";

function Search({ sharedRecipes, setFilteredRecipes }) {
  const [term, setTerm] = useState("");

  const handleTerm = (e) => {
    setTerm(e.target.value);

    if (e.target.value === "") {
      setFilteredRecipes("");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const filtered = sharedRecipes.filter((recipe) => {
      if (recipe.title.includes(term)) {
        return recipe;
      }
    });
    setFilteredRecipes(filtered);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input_search"
        type="text"
        placeholder="search recipe"
        onChange={handleTerm}
        value={term}
        required
      />

      <button className="form__button_search" type="submit">
        search
      </button>
    </form>
  );
}

export default Search;
