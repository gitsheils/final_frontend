import "./AddPhoto.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState, useEffect } from "react";
import carrot from "../../assets/carrot.svg";

function AddPhoto({ isOpen, closeModal }) {
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const source = window.URL.createObjectURL(e.target.files[0]);
    console.log(source);
    setImage(source);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="Add Photo"
      buttonLabel="add"
      handleSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="file"
        onChange={handleImage}
        required
      />
      <img src={image}></img>
    </ModalWithForm>
  );
}

export default AddPhoto;
