import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Countries() {

    const [countries, setCountries] = useState();

    useEffect(() => {
      myAxios()
    }, []);
  
    const myAxios = () => {
    
      axios({
          method: 'get',
          url: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        })
          .then(function (response) {
            var countryList = []
            response.data.meals.map((item) => {
                return countryList.push(item.strArea);
                });
                setCountries(countryList)
            }); 
        }
    return (
        <>
            <h1>Food by country</h1>
            <ul>
                {countries && countries.map((item) => {
                    return <li key={item}>
                        <NavLink to={`/countries/${item.toLowerCase()}`}>
                            {item}
                        </NavLink>
                        </li>
                    })
                }
            </ul>
        </>
    );
}


export default Countries;