import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './styled/Card/Card'
import FoodList from './styled/FoodList/FoodList'

function ListRandom() {

  const [foodRandom, setFoodRandom] = useState([]);

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
         setFoodRandom(foodRandom => foodRandom.concat(response.data.meals[0]))
        });
    }
    console.log(foodRandom)
  }


  return (
    <>
    <h1>Moje Uzasne zradlo</h1>
    <FoodList>
      {foodRandom.length > 1 && foodRandom.map((food, id) => {
          return <Card key={id}>
              <img src={food.strMealThumb} alt={`Image of ` + food.strMeal}/>
              <h1>
                  {food.strMeal}
              </h1>
              <NavLink to={`/details/${food.idMeal}`}>More</NavLink>
          </Card>
      })
      }
  </FoodList>
</>
);

}

export default ListRandom;
