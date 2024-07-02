/*
import "./ItemCard.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";


function ItemCard({ item, handleCardClick, onCardLike }) {
  const handleClick = () => {
    handleCardClick(item);
  };

  const currentUserContext = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUserContext._id);
  const itemLikeButtonClassName = `card__buttonLike ${
    isLiked && "card__buttonLike_active"
  }`;

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <div className="card">
      <div className="card__title-and-like">
        <h2 className="card__title">{item.name}</h2>
        {currentUserContext.name && (
          <div className={itemLikeButtonClassName} onClick={handleLike}></div>
        )}
      </div>

      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleClick}
      ></img>
    </div>
  );
}
*/
import "./ItemCard.css";

function ItemCard({ item, handleClickCard }) {
  let ingList = item.ing.split("\n");

  function handleClick() {
    handleClickCard(item);
  }

  if (item.image) {
    return (
      <div className="card" onClick={handleClick}>
        <img className="card__image" src={item.image}></img>
        <h2 className="card__title">{item.title}</h2>
      </div>
    );
  }
  return (
    <div className="card" onClick={handleClick}>
      <h2 className="card__title">{item.title}</h2>

      <p className="card__ingredient">
        {ingList.map((ing) => {
          return (
            <>
              {ing}
              <br />
            </>
          );
        })}
      </p>

      <p className="card__instruction">{item.ins}</p>
    </div>
  );
}
export default ItemCard;
