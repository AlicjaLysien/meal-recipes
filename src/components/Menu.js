import { NavLink } from "react-router-dom";
import NavMenu from "./styled/NavMenu/NavMenu";

function Menu() {
  return (
    <NavMenu>
      <ul>
        <li>
          <NavLink to="/" end>
            Main Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/countries">By country</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
    </NavMenu>
  );
}

export default Menu;
