import "./Nav.css";
import { Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Search from "./Search";
// import Contact from "./Contact";

function Nav() {
  return (
    <>
      <nav>
        <h2>E-COM PRODUCT COMPARE</h2>
        <ul className="nav-li">
          <Link to="/Home">
            <li>HOME</li>
          </Link>
          <Link to="/Search">
            <li>SEARCH</li>
          </Link>
          <Link to="/About">
            <li>ABOUT</li>
          </Link>
          <Link to="/Contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
