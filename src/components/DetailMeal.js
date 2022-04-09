import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './styled/Card/Card'

function DetailMeal() {

    const [meal, setMeal] = useState();

    useEffect(() => {
        myAxios()
      }, []);
    
      const myAxios = () => {
        const id = window.location.pathname.split("/").pop()
        axios({
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          })
            .then(function (response) {
                setMeal(response.data.meals[0]);
            });
            
      }

    return (
        <>
        {meal && <Card>
            {console.log(meal)}
              <img src={meal.strMealThumb} alt={`Image of ` + meal.strMeal}/>
              <h1>
                  {meal.strMeal}
              </h1>
            
          </Card> }
        </>
);

}

export default DetailMeal;