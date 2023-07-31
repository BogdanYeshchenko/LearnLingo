import "./header.css";
import ConteinerCenter from "../conteiner/ConteinerCenter";

const { NavLink } = require("react-router-dom");

function Header() {
  return (
    <header className="header">
      <ConteinerCenter>
        <nav className="nav">
          <>
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>

            <NavLink className="nav-link" to={"/tweets-cards"}>
              Tweets Cards
            </NavLink>
          </>
        </nav>
      </ConteinerCenter>
    </header>
  );
}

export default Header;
