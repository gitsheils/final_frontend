import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn, handleClickAdd }) {
  if (isLoggedIn) {
    return (
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
        <NavLink className="nav__link" to="/nutrition">
          Fruit nutrition
        </NavLink>

        <NavLink
          className="nav__link nav__link_loggedin nav__link_loggedin_left"
          to="/myrecipes"
        >
          My recipes
        </NavLink>
        <a
          className="nav__link nav__link_loggedin nav__link_loggedin_right"
          onClick={handleClickAdd}
        >
          + Add recipe
        </a>
      </nav>
    );
  }

  {
    /*
  if (isLoggedIn) {
    return (
      <nav className="nav">
        <a className="nav__link" href="/">
          Home
        </a>
        <a className="nav__link" href="/nutrition">
          Fruit nutrition
        </a>

        
        
        <a
          className="nav__link nav__link_loggedin nav__link_loggedin_left"
          href="/myrecipes"
        >
          My recipes
        </a>
        <a
          className="nav__link nav__link_loggedin nav__link_loggedin_right"
          onClick={handleClickAdd}
        >
          + Add recipe
        </a>
      </nav>
    );
  }
*/
  }
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="nav__link" to="/nutrition">
        Fruit nutrition
      </NavLink>
    </nav>
  );
}

export default Navigation;
