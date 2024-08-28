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

  let ingListWithID = [];
  for (let i = 0; i < ingList.length; i++) {
    ingListWithID.push({ ing: ingList[i], id: i + 1 });
  }

  function handleClick() {
    handleClickCard(item);
  }

  if (item.image) {
    return (
      <li className="card" onClick={handleClick}>
        <img
          className="card__image"
          src={item.image}
          alt={`image of ${item.title}`}
        ></img>
        <h2 className="card__title">{item.title}</h2>
      </li>
    );
  }
  return (
    <li className="card" onClick={handleClick}>
      <h2 className="card__title">{item.title}</h2>

      <ul className="card__ingredients">
        {ingListWithID.map((item) => {
          return (
            <li className="card__ingredients__item" key={item.id}>
              {item.ing}
              <br />
            </li>
          );
        })}
      </ul>

      <p className="card__instruction">{item.ins}</p>
    </li>
  );
}
export default ItemCard;
