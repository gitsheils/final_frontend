import "./SignupModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState, useEffect } from "react";

function SignupModal({ isOpen, closeModal, handleSubmitSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitSignup({ email, password });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="Sign Up"
      buttonLabel="sign up"
      handleSubmit={handleSubmit}
    >
      <label className="form__label" htmlFor="email">
        Email
        <input
          className="form__input"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleEmail}
          value={email}
          required
        />
      </label>
      <label className="form__label" htmlFor="password">
        Password
        <input
          className="form__input"
          type="text"
          placeholder="Password"
          id="password"
          onChange={handlePassword}
          value={password}
          required
          minLength={2}
          maxLength={30}
        />
        <span className="form__input-error"></span>
      </label>
    </ModalWithForm>
  );
}

export default SignupModal;
