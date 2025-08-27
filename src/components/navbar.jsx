import { NavLink } from "react-router";
import menus from "~/models/menus.json";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          {menus.map((item, index) =>
            item.id === 5 ? null : (
              <li className="navbar-item" key={index}>
                <NavLink to={item.navlink} className="navbar-link">
                  {item.title}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
