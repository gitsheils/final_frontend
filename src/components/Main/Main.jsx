import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

import Search from "../Search/Search.jsx";
import { getSharedRecipes } from "../../utils/api.js";
import { useState } from "react";

function Main({ recipes, handleClickCard, sharedRecipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState("");

  return (
    <main className="main">
      <Search
        sharedRecipes={sharedRecipes}
        setFilteredRecipes={setFilteredRecipes}
      ></Search>

      <section className="cards">
        <ul className="cards__list">
          {filteredRecipes
            ? filteredRecipes.map((item) => {
                return (
                  <ItemCard
                    key={item._id}
                    item={item}
                    handleClickCard={handleClickCard}
                  />
                );
              })
            : recipes
                .filter((item) => {
                  return item.shared === true;
                })
                .map((item) => {
                  return (
                    <ItemCard
                      key={item._id}
                      item={item}
                      handleClickCard={handleClickCard}
                    />
                  );
                })}
        </ul>
      </section>
    </main>
  );

  {
    /*
  return (
    <main className="main">
      <section className="cards">
        <ul className="cards__list">
          {recipes
            .filter((item) => {
              return item.shared === true;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleClickCard={handleClickCard}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
          */
  }
}
export default Main;
