import "./ItemModal.css";

function ItemModal({ isOpen, closeModal, card, handleClickDelete, user }) {
  let ingList = card.ingredients.split("\n");

  let ingListWithID = [];
  for (let i = 0; i < ingList.length; i++) {
    ingListWithID.push({ ing: ingList[i], id: i + 1 });
  }

  function handleDelete() {
    handleClickDelete(card);
  }

  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content modal__content_item">
        <button className="modal__close" onClick={closeModal}></button>
        <div className="modal__recipe">
          {card.image && (
            <img
              className="modal__image"
              src={card.image}
              alt={`image of ${card.title}`}
            ></img>
          )}
          <h2 className="modal__title">{card.title}</h2>

          <ul className="modal__ingredients">
            {ingListWithID.map((item) => {
              return (
                <li className="modal__ingredients__item" key={item.id}>
                  {item.ing}
                  <br />
                </li>
              );
            })}
          </ul>
          <p className="modal__ins">{card.instruction}</p>
          {user._id === card.owner && (
            <button className="modal__delete" onClick={handleDelete}>
              delete recipe
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
