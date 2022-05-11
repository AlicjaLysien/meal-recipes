import { NavLink } from 'react-router-dom';
import Card from './styled/Card/Card'


function MealCard(props) {

    return (
    <Card>
        <NavLink to={props.meal.idMeal !== undefined ? `/details/${props.meal.idMeal}` : `${props.meal.urlCountry}`}>
        <img src={props.meal.strMealThumb} alt={`Image of ` + props.meal.strMeal}/>
            <h2>
                {props.meal.strMeal}
            </h2>
        </NavLink>
    </Card>
    );
}

export default MealCard;