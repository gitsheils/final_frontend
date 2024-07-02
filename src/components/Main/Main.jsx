import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({ recipes, user, handleClickCard }) {
  return (
    <div className="main">
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
    </div>
  );
}
export default Main;
