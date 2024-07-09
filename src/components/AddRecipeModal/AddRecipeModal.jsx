import "./AddRecipeModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState, useEffect, useRef } from "react";

function AddRecipeModal({ isOpen, closeModal, handleSubmitAdd }) {
  const [title, setTitle] = useState("");
  const [ing, setIng] = useState("");
  const [ins, setIns] = useState("");
  const [shared, setShared] = useState(false);
  const [image, setImage] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleIng = (e) => {
    setIng(e.target.value);
  };
  const handleIns = (e) => {
    setIns(e.target.value);
  };
  const handleShare = (e) => {
    setShared(e.target.checked);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  useEffect(() => {
    setTitle("");
    setIng("");
    setIns("");
    setShared(false);
    setImage("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      handleSubmitAdd({
        title,
        ing,
        ins,
        shared,
      });
    }
    if (image) {
      handleSubmitAdd({
        title,
        ing,
        ins,
        shared,
        image,
      });
    }
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Recipe"
      buttonLabel="add"
      handleSubmit={handleSubmit}
    >
      <label className="form__label" htmlFor="title">
        Title
        <input
          className="form__input"
          type="text"
          placeholder="title"
          id="title"
          onChange={handleTitle}
          value={title}
          required
        />
      </label>
      <label className="form__label" htmlFor="ing">
        Ingredients
        <textarea
          className="form__input form__input_ing"
          id="ing"
          placeholder="1)
2)
3)
...
"
          onChange={handleIng}
          value={ing}
          required
        ></textarea>
      </label>
      <label className="form__label" htmlFor="ins">
        Instructions
        <textarea
          className="form__input form__input_ins"
          id="ins"
          onChange={handleIns}
          value={ins}
          required
        ></textarea>
      </label>

      <label className="form__label" htmlFor="image">
        Image Url
        <input
          className="form__input"
          type="url"
          placeholder="url"
          id="image"
          onChange={handleImage}
          value={image}
        />
      </label>

      <label className="form__label_checkbox" htmlFor="shared">
        <input
          className="form__input_checkbox"
          type="checkbox"
          id="shared"
          onChange={handleShare}
          checked={shared}
        ></input>
        share
      </label>
    </ModalWithForm>
  );
}

export default AddRecipeModal;
