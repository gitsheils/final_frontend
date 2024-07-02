import { useState, useEffect } from "react";
import "./App.css";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { recipesConstant, usersConstant } from "../../utils/constants.js";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";

import { Routes, Route, useNavigate } from "react-router-dom";
import SigninModal from "../SigninModal/SigninModal.jsx";
import SignupModal from "../SignupModal/SignupModal.jsx";
import AddRecipeModal from "../AddRecipeModal/AddRecipeModal.jsx";
import Nutrition from "../Nutrition/Nutrition.jsx";

import ItemModal from "../ItemModal/ItemModal.jsx";

import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import Preloader from "../Preloader/Preloader.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [recipes, setRecipes] = useState(recipesConstant);

  const [modalType, setModalType] = useState("");

  const [users, setUsers] = useState(usersConstant);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setLoginFailed(false);
  }

  function handleClickSignin() {
    setIsOpen(true);
    setModalType("signin");
  }
  function handleClickSignup() {
    setIsOpen(true);
    setModalType("signup");
  }

  const currentUser = (email, password) => {
    return users.find((user) => {
      return user.email === email && user.password === password;
    });
  };
  const [loginFailed, setLoginFailed] = useState(false);
  function handleSubmitSignin({ email, password }) {
    const user = currentUser(email, password);
    if (user) {
      setIsLoggedIn(true);
      setUser(user);
      closeModal();
      navigate("/myrecipes");
      return;
    }

    setLoginFailed(true);

    return console.log("user not found");
  }
  function handleSubmitSignup({ email, password }) {
    setUsers([...users, { email, password }]);
    setIsLoggedIn(true);
    setUser({ email, password });
    closeModal();
  }

  //
  function handleClickAdd() {
    setIsOpen(true);
    setModalType("recipe");
  }

  function handleSubmitAdd({ title, ing, ins, shared }) {
    setRecipes([
      ...recipes,
      { id: recipes.length + 1, owner: user.email, shared, title, ing, ins },
    ]);
    closeModal();
  }

  const [selectedCard, setSelectedCard] = useState({});
  const handleClickCard = (card) => {
    setIsOpen(true);
    setModalType("card");
    setSelectedCard(card);
  };
  const handleClickDelete = (card) => {
    closeModal();
    const updatedRecipes = [...recipes];

    updatedRecipes.forEach((item, index) => {
      if (item.id === card.id) {
        updatedRecipes.splice(index, 1);
      }
    });
    setRecipes(updatedRecipes);
  };
  function handleClickSignout() {
    setIsLoggedIn(false);
    setUser("");
    navigate("/");
  }

  return (
    <div className="page__content">
      <Header
        isLoggedIn={isLoggedIn}
        handleClickSignup={handleClickSignup}
        handleClickSignin={handleClickSignin}
        user={user}
        handleClickSignout={handleClickSignout}
      />
      <Navigation isLoggedIn={isLoggedIn} handleClickAdd={handleClickAdd} />

      <Routes>
        <Route path="*" element={<Preloader />}></Route>
        <Route
          path="/"
          element={
            <Main
              recipes={recipes}
              user={user}
              handleClickCard={handleClickCard}
            />
          }
        />
        <Route
          path="/myrecipes"
          element={
            <Profile
              recipes={recipes}
              isLoggedIn={isLoggedIn}
              user={user}
              handleClickCard={handleClickCard}
            />
          }
        />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
      {modalType === "signin" && (
        <SigninModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleSubmitSignin={handleSubmitSignin}
          loginFailed={loginFailed}
        ></SigninModal>
      )}
      {modalType === "signup" && (
        <SignupModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleSubmitSignup={handleSubmitSignup}
        ></SignupModal>
      )}
      {modalType === "recipe" && (
        <AddRecipeModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleSubmitAdd={handleSubmitAdd}
        ></AddRecipeModal>
      )}
      {modalType === "card" && (
        <ItemModal
          isOpen={isOpen}
          closeModal={closeModal}
          card={selectedCard}
          handleClickDelete={handleClickDelete}
          user={user}
        ></ItemModal>
      )}

      <About />
      <Footer />
    </div>
  );
}

export default App;
