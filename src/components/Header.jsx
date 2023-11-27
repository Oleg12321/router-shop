import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav container">
        <ul className="header__nav-ul d-flex justify-content-between align-items-center gap-2">
          <li className="header__nav-li">
            <NavLink to={"/"} className="header__nav-link">
              Home
            </NavLink>
          </li>
          <li className="header__nav-li">
            <NavLink to={"about"} className="header__nav-link">
              About
            </NavLink>
          </li>
          <li className="header__nav-li">
            <NavLink to={"products"} className="header__nav-link">
              Products
            </NavLink>
          </li>
          <li className="header__nav-li">
            <NavLink to={"posts"} className="header__nav-link">
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
