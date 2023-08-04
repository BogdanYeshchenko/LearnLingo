import "./header.css";
import { useSelector } from "react-redux";
import Conteiner from "../conteiner/Conteiner";
import Logo from "../logo/logo";
import Auth from "../auth/auth";

const { NavLink } = require("react-router-dom");

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);

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
            {isAuth && (
              <NavLink className="nav-link" to={"/favorites"}>
                Favorites
              </NavLink>
            )}
          </>
        </nav>

        <Auth />
      </header>
    </Conteiner>
  );
}

export default Header;
