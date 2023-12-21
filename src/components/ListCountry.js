import axios from "axios";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";
import FoodList from "./styled/FoodList/FoodList";

function ListRandom() {
  const [meals, setMeals] = useState([]);
  const [areaName, setAreaName] = useState([]);

  useEffect(() => {
    myAxios();
  }, []);

  const myAxios = () => {
    const area = window.location.pathname.split("/").pop();
    setAreaName((areaName) => area[0].toUpperCase() + area.substring(1));
    axios({
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    }).then(function (response) {
      // we need response.data.meals[0]
      setMeals((meals) => meals.concat(response.data.meals));
    });
  };

  return (
    <>
      <h2>{areaName} meals</h2>
      <FoodList>
        {meals.length > 0 &&
          meals.map((meal, id) => {
            return <MealCard key={id} meal={meal} />;
          })}
      </FoodList>
    </>
  );
}

export default ListRandom;
