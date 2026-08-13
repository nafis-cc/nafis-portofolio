import { NavLink } from "react-router";
import { FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";
import menus from "~/models/menus.json";

const iconMap = {
  1: FaUser,
  2: FaFileAlt,
  3: FaBriefcase,
  4: FaEnvelope,
};

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menus.map((item, index) => {
          const Icon = iconMap[item.id];
          return item.id === 5 ? null : (
            <li className="navbar-item" key={index}>
              <NavLink to={item.navlink} className="navbar-link">
                {Icon && <Icon className="navbar-icon" />}
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
