import axios from "axios";
import { useEffect, useState } from "react";
import Recipe from "./styled/Recipe/Recipe";

function DetailMeal() {
  const [meal, setMeal] = useState();
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    myAxios();
  }, []);

  const myAxios = () => {
    const id = window.location.pathname.split("/").pop();
    axios({
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    }).then((response) => {
      setMeal(response.data.meals[0]);

      const foundIngredients = [];
      Object.entries(response.data.meals[0]).forEach((item) => {
        const [key, value] = item;
        if (value != null && value !== "" && key.includes("strIngredient")) {
          foundIngredients.push(value);
        }
      });

      const foundMeasures = [];
      Object.entries(response.data.meals[0]).forEach((item) => {
        const [key, value] = item;
        if (value != null && value !== "" && key.includes("strMeasure")) {
          foundMeasures.push(value);
        }
      });

      const ingredientsPairs = {};
      foundIngredients.forEach((element, index) => {
        ingredientsPairs[element] = foundMeasures[index];
      });

      setIngredients(ingredientsPairs);
    });
  };

  return (
    <>
      {meal && (
        <Recipe>
          <h2>{meal.strMeal}</h2>
          <div className="ingredients">
            <img src={meal.strMealThumb} alt={`Image of ` + meal.strMeal} />
            <span>
              <h3>What you need?</h3>
              <ul>
                {Object.entries(ingredients).map((item, id) => {
                  const [key, value] = item;
                  return (
                    <li key={id}>
                      {key} - {value}
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>
          <div className="describtion">
            <h3>How to prepare?</h3>
            <p>{meal.strInstructions}</p>
          </div>
        </Recipe>
      )}
    </>
  );
}

export default DetailMeal;
