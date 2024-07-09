import "./ItemCard.css";

function ItemCard({ item, handleClickCard }) {
  let ingList = item.ingredients.split("\n");

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
      <p className="card__instruction">{item.instruction}</p>
    </li>
  );
}
export default ItemCard;
