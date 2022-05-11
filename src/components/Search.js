import axios from "axios";
import SearchForm from "./styled/SearchForm/SearchForm";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import MealCard from './MealCard';
import FoodList from './styled/FoodList/FoodList'

function Search() {

const inputMeal = useRef([]);

const [results, setResults] = useState();

const searchMeal = e => {
    e.preventDefault();
    const search = inputMeal.current.value;

    axios({
        method: 'get',
        url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      })
        .then(function (response) {
            setResults(response.data.meals)
        });
}

    return (
        <>
            <h2>Search by meal name</h2>
            <SearchForm onSubmit={searchMeal}>
                <input ref={inputMeal} type="text" placeholder="Search.."/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
            </SearchForm>
            <FoodList>
                {results && results.map((meal, id) => {
                    return <MealCard key={id} meal={meal} />
                    })
                }
            </FoodList>
        </>
    );
}


export default Search;