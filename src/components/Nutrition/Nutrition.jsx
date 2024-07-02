import "./Nutrition.css";
import { useState, useEffect } from "react";
import { getFruit } from "../../utils/ThirdPartyApi.js";

function Nutrition() {
  const [fruit, setFruit] = useState("");
  const [info, setInfo] = useState({});
  const [serverError, setServerError] = useState(false);

  const handleFruit = (e) => {
    setFruit(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    displayLoader();

    getFruit(fruit)
      .then((res) => {
        console.log(res);
        setInfo(res.items[0]);

        setServerError(false);
      })
      .catch((err) => {
        {
          setServerError(true);
        }
        console.log(err);
      });
  }

  let nutritionInfo;

  function displayLoader() {
    setInfo("loader");
  }

  if (info === "loader") {
    nutritionInfo = (
      <div className="nutrition__info">
        <div className="nutrition__info__loader"></div>
      </div>
    );
  } else if (!info) {
    nutritionInfo = (
      <div className="nutrition__info">
        <h2 className="nutrition__info-title">
          CalorieNinjas does not have info on "{fruit}"
        </h2>
      </div>
    );
  } else if (info.name) {
    nutritionInfo = (
      <div className="nutrition__info">
        <h2 className="nutrition__info-title">
          per 100g/3.5oz of {info.name}:
        </h2>
        <p className="nutrition__info-line">calories: {info.calories}</p>
        <p className="nutrition__info-line">
          total fat (g): {info.fat_total_g}
        </p>
        <p className="nutrition__info-line">
          saturated fat (g): {info.fat_saturated_g}
        </p>
        <p className="nutrition__info-line">protein (g): {info.protein_g}</p>
        <p className="nutrition__info-line">
          carbs (g): {info.carbohydrates_total_g}
        </p>
        <p className="nutrition__info-line">fiber (g): {info.fiber_g}</p>
        <p className="nutrition__info-line">sugar (g): {info.sugar_g}</p>
        <p className="nutrition__info-line">sodium (mg): {info.sodium_mg}</p>
        <p className="nutrition__info-line">
          potassium (mg): {info.potassium_mg}
        </p>
        <p className="nutrition__info-line">
          cholesterol (mg): {info.cholesterol_mg}
        </p>
      </div>
    );
  } else {
    nutritionInfo = (
      <div className="nutrition__info">
        <h2 className="nutrition__info-title">per 100g/3.5oz:</h2>
        <p className="nutrition__info-line">calories: {}</p>
        <p className="nutrition__info-line">total fat (g): {}</p>
        <p className="nutrition__info-line">saturated fat (g): {}</p>
        <p className="nutrition__info-line">protein (g): {}</p>
        <p className="nutrition__info-line">carbs (g): {}</p>
        <p className="nutrition__info-line">fiber (g): {}</p>
        <p className="nutrition__info-line">sugar (g): {}</p>
        <p className="nutrition__info-line">sodium (mg): {}</p>
        <p className="nutrition__info-line">potassium (mg): {}</p>
        <p className="nutrition__info-line">cholesterol (mg): {}</p>
      </div>
    );
  }
  if (serverError) {
    nutritionInfo = (
      <div className="nutrition__info">
        <h2 className="nutrition__info-title">
          An error has occurred on the CalorieNinjas server
        </h2>
      </div>
    );
  }

  return (
    <div className="nutrition">
      <form className="form_nutrition" onSubmit={handleSubmit}>
        <label className="form__label_nutrition">
          Nutrition info is provided by CalorieNinjas
          <input
            className="form__input_nutrition"
            type="text"
            placeholder="search up nutrition of a food"
            id="fruit"
            value={fruit}
            onChange={handleFruit}
          />
        </label>
        <button className="form__button">search</button>
      </form>
      {nutritionInfo}
    </div>
  );
}

export default Nutrition;
