import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import Search from "../Search/Search";
import { useState } from "react";

function Main({ recipes, user, handleClickCard }) {
  const [filteredRecipes, setFilteredRecipes] = useState("");

  return (
    <main className="main">
      <Search
        recipes={recipes.filter((item) => {
          return item.shared === true;
        })}
        setFilteredRecipes={setFilteredRecipes}
      ></Search>

      <section className="cards">
        {filteredRecipes ? (
          <ul className="cards__list">
            {filteredRecipes.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  item={item}
                  handleClickCard={handleClickCard}
                />
              );
            })}
          </ul>
        ) : (
          <ul className="cards__list">
            {recipes
              .filter((item) => {
                return item.shared === true;
              })
              .map((item) => {
                return (
                  <ItemCard
                    key={item.id}
                    item={item}
                    handleClickCard={handleClickCard}
                  />
                );
              })}
          </ul>
        )}
      </section>
      {/*
      <section className="cards">
        <ul className="cards__list">
          {recipes
            .filter((item) => {
              return item.shared === true;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  item={item}
                  handleClickCard={handleClickCard}
                />
              );
            })}
        </ul>
      </section>
          */}
    </main>
  );
}
export default Main;
