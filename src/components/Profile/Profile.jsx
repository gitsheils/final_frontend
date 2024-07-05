import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";

function Profile({ recipes, isLoggedIn, user, handleClickCard }) {
  if (isLoggedIn) {
    return (
      <div className="profile">
        <section className="cards">
          <ul className="cards__list">
            {recipes
              .filter((item) => {
                return item.owner === user.email;
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
  return <></>;
}
export default Profile;
