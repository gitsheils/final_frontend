import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({ recipes, user, handleClickCard }) {
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
                  key={item.id}
                  item={item}
                  handleClickCard={handleClickCard}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
