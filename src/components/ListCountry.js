import axios from 'axios';
import { useEffect, useState } from 'react';
import MealCard from './MealCard';
import FoodList from './styled/FoodList/FoodList'

function ListRandom() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    myAxios()
  }, []);

  const myAxios = () => {
    const area = window.location.pathname.split("/").pop()
    axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      })
        .then(function (response) {
            // we need response.data.meals[0]
            setMeals(meals => meals.concat(response.data.meals))
        });
  }


  return (
    <>
    <h1>Random meals</h1>
    <FoodList>
        {meals.length > 0 && meals.map((meal, id) => {
            return <MealCard key={id} meal={meal} />
        })
        }
      </FoodList>
</>
);

}

export default ListRandom;
