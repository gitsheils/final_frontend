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

import { setToken, getToken, removeToken } from "../../utils/token.js";
import {
  getSharedRecipes,
  signin,
  getUserInfo,
  signup,
  addRecipe,
  getMyRecipes,
  deleteRecipe,
} from "../../utils/api.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [user, setUser] = useState("");

  const [sharedRecipes, setSharedRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [loginFailed, setLoginFailed] = useState(false);
  const [signupFailed, setSignupFailed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getSharedRecipes()
      .then((shared) => {
        const reversed = shared.reverse();
        setSharedRecipes(reversed);
      })
      .catch(console.error);

    const token = getToken();
    if (!token) {
      return;
    }
    getUserInfo(token)
      .then((user) => {
        setUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => console.log(err));

    getMyRecipes(token)
      .then((myr) => {
        const reversed = myr.reverse();
        setMyRecipes(reversed);
      })
      .catch(console.error);
  }, []);

  function closeModal() {
    setIsOpen(false);
    setLoginFailed(false);
    setSignupFailed(false);
  }

  function handleClickSignup() {
    setIsOpen(true);
    setModalType("signup");
  }
  function handleClickSignin() {
    setIsOpen(true);
    setModalType("signin");
  }
  function handleClickAdd() {
    setIsOpen(true);
    setModalType("recipe");
  }
  function handleClickSignout() {
    setIsLoggedIn(false);
    setUser("");
    removeToken();
    navigate("/");
  }
  const handleClickCard = (card) => {
    setIsOpen(true);
    setModalType("card");
    setSelectedCard(card);
  };

  const handleClickDelete = (card) => {
    const token = getToken();
    deleteRecipe(token, card._id)
      .then((res) => {
        if (res.shared) {
          setSharedRecipes(
            sharedRecipes.filter((item) => {
              return item._id !== res._id;
            })
          );
          setMyRecipes(
            myRecipes.filter((item) => {
              return item._id !== res._id;
            })
          );
          closeModal();
        } else {
          setMyRecipes(
            myRecipes.filter((item) => {
              return item._id !== res._id;
            })
          );
          closeModal();
        }
      })
      .catch(console.error);
  };

  function handleSubmitSignup({ email, password }) {
    signup(email, password)
      .then((user) => {
        handleSubmitSignin({ email, password });
      })
      .catch((err) => {
        console.log(err);
        if (err === "Error 409") {
          setSignupFailed(true);
        }
      });
  }

  function handleSubmitSignin({ email, password }) {
    signin(email, password)
      .then((res) => {
        setToken(res.token);
        const token = getToken();
        getUserInfo(token)
          .then((user) => {
            setUser(user);
            setIsLoggedIn(true);
            closeModal();

            navigate("/myrecipes");
          })
          .catch((err) => {
            console.log(err);
          });

        getMyRecipes(token)
          .then((myr) => {
            const reversed = myr.reverse();
            setMyRecipes(reversed);
          })
          .catch(console.error);
      })
      .catch((err) => {
        console.log(err);
        if (err === "Error 401") {
          setLoginFailed(true);
        }
      });
  }

  function handleSubmitAdd({ title, ing, ins, shared, image }) {
    const token = getToken();
    addRecipe(token, title, ing, ins, shared, image)
      .then((res) => {
        if (res.shared) {
          setSharedRecipes([res, ...sharedRecipes]);
          setMyRecipes([res, ...myRecipes]);
        } else {
          setMyRecipes([res, ...myRecipes]);
        }
        closeModal();
      })
      .catch(console.error);
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
              recipes={sharedRecipes}
              handleClickCard={handleClickCard}
              sharedRecipes={sharedRecipes}
            />
          }
        />

        <Route
          path="/myrecipes"
          element={
            <Profile
              recipes={myRecipes}
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
          signupFailed={signupFailed}
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

      {modalType === "add2" && (
        <AddPhoto
          isOpen={isOpen}
          closeModal={closeModal}
          handleClickAdd2={handleClickAdd2}
        ></AddPhoto>
      )}

      <About />
      <Footer />
    </div>
  );
}

export default App;
