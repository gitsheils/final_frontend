import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";
import { Navigate } from "react-router-dom";

function Profile({ recipes, isLoggedIn, user, handleClickCard }) {
  if (isLoggedIn) {
    return (
      <div className="profile">
        <section className="cards">
          <ul className="cards__list">
            {recipes.map((item) => {
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
      </div>
    );
  }
  return <Navigate to={"/"} />;
}

export default Profile;
