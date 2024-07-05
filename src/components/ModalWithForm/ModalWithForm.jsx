import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  closeModal,
  title,
  buttonLabel,
  children,
  handleSubmit,
  loginFailed,
}) {
  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}

          <span
            className={`modal__error ${
              loginFailed == true && "modal__error_active"
            }`}
          >
            Invalid email or password
          </span>
          <button className="modal__submit" type="submit">
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
