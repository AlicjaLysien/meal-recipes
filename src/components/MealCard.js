import { NavLink } from 'react-router-dom';
import Card from './styled/Card/Card'


function MealCard(props) {

    return (
    <Card>
        <img src={props.meal.strMealThumb} alt={`Image of ` + props.meal.strMeal}/>
            <h1>
                {props.meal.strMeal}
            </h1>
        <NavLink to={`/details/${props.meal.idMeal}`}>More</NavLink>
    </Card>
    );
}

export default MealCard;