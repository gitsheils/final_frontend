import "./SigninModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useState, useEffect } from "react";

function SigninModal({ isOpen, closeModal, handleSubmitSignin, loginFailed }) {
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
    handleSubmitSignin({ email, password });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="Sign In"
      buttonLabel="sign in"
      handleSubmit={handleSubmit}
      loginFailed={loginFailed}
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
        />
      </label>
    </ModalWithForm>
  );
}

export default SigninModal;
