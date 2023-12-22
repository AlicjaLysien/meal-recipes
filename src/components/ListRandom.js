import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import FoodList from "./styled/FoodList/FoodList";
import Loader from "./styled/Loader/Loader";
import imgChinese from "./../images/countries/china.jpg";
import imgItaly from "./../images/countries/italy.jpg";
import imgGreece from "./../images/countries/greece.jpg";

function ListRandom() {
  const [mealsRandom, setMealsRandom] = useState([]);
  const [countries, setCountries] = useState([
    {
      id: 1,
      urlCountry: "/countries/chinese",
      strMealThumb: imgChinese,
      strMeal: "China",
    },
    {
      id: 2,
      urlCountry: "/countries/italian",
      strMealThumb: imgItaly,
      strMeal: "Italy",
    },

    {
      id: 3,
      urlCountry: "/countries/greek",
      strMealThumb: imgGreece,
      strMeal: "Greece",
    },
  ]);

  useEffect(() => {
    myAxios();
  }, []);

  const myAxios = () => {
    for (let i = 0; i < 3; i++) {
      axios({
        method: "get",
        url: "https://www.themealdb.com/api/json/v1/1/random.php",
      }).then(function (response) {
        setMealsRandom((mealsRandom) => mealsRandom.concat(response.data.meals[0]));
      });
    }
  };

  return (
    <>
      <h2>Random meals</h2>
      <FoodList>
        {mealsRandom.length !== 3 ? (
          <Loader />
        ) : (
          mealsRandom.map((meal, id) => {
            return <MealCard key={id} meal={meal} />;
          })
        )}
      </FoodList>
      <NavLink to="/search" className="button">
        Look up for more
      </NavLink>

      <h2>International cousine</h2>
      <FoodList>
        {countries.length > 0 &&
          countries.map((meal, id) => {
            return <MealCard key={id} meal={meal} />;
          })}
      </FoodList>
      <NavLink to="/countries" className="button">
        More from the World
      </NavLink>
    </>
  );
}

export default ListRandom;
