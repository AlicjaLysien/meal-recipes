import axios from 'axios';
import { useEffect, useState } from 'react';
import MealCard from './MealCard';
import FoodList from './styled/FoodList/FoodList'

function ListRandom() {

  const [mealsRandom, setMealsRandom] = useState([]);

  useEffect(() => {
    myAxios()
  }, []);

  const myAxios = () => {
    for (let i = 0; i <3; i++) {
    axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php'
      })
        .then(function (response) {
            // we need response.data.meals[0]
         setMealsRandom(mealsRandom => mealsRandom.concat(response.data.meals[0]))
        });
    }
    console.log(mealsRandom)
  }


  return (
    <>
    <h1>Random meals</h1>
      <FoodList>
        {mealsRandom.length > 0 && mealsRandom.map((meal, id) => {
            return <MealCard key={id} meal={meal} />
          })
        }
      </FoodList>
</>
);

}

export default ListRandom;
