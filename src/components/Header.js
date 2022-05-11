import { NavLink } from 'react-router-dom';
import Header from './styled/Header/Header'
import icon01 from './../images/icons/01.png'
import icon02 from './../images/icons/02.png'
import icon03 from './../images/icons/03.png'
import icon04 from './../images/icons/04.png'
import icon05 from './../images/icons/05.png'
import icon06 from './../images/icons/06.png'

function Menu() {

    return (
        <Header>
            <img src={icon01} alt="onion"/>
            <img src={icon02} alt="onion"/>
            <img src={icon03} alt="onion"/>
            <h1>Food recipe</h1>
            <img src={icon04} alt="onion"/>
            <img src={icon05} alt="onion"/>
            <img src={icon06} alt="onion"/>
        </Header>
    );
}

export default Menu;
