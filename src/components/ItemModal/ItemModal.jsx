import "./ItemModal.css";

function ItemModal({ isOpen, closeModal, card, handleClickDelete, user }) {
  let ingList = card.ing.split("\n");

  function handleDelete() {
    handleClickDelete(card);
  }

  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content modal__content_item">
        <button className="modal__close" onClick={closeModal}></button>
        <div className="modal__recipe">
          {card.image && <img className="modal__image" src={card.image}></img>}
          <h2 className="modal__title">{card.title}</h2>
          <p className="modal__ing">
            {ingList.map((ing) => {
              return (
                <>
                  {ing}
                  <br />
                </>
              );
            })}
          </p>
          <p className="modal__ins">{card.ins}</p>
          {user.email === card.owner && (
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
