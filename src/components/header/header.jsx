import "./header.css";
import Logo from "../logo/logo";
import Auth from "../auth/auth";
import Conteiner from "../conteiner/Conteiner";

const { NavLink } = require("react-router-dom");

function Header() {
  return (
    <Conteiner>
      <header className="header">
        <Logo />
        <nav className="nav">
          <>
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>

            <NavLink className="nav-link" to={"/teachers"}>
              Teachers
            </NavLink>
          </>
        </nav>

        <Auth />
      </header>
    </Conteiner>
  );
}

export default Header;
