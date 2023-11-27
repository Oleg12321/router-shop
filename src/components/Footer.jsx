import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <nav>
          <ul className="d-flex justify-content-between align-items-center gap-2">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"posts"}>Posts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
