import "./header.css";
import { useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

import Conteiner from "../conteiner/Conteiner";
import Logo from "../logo/logo";
import Auth from "../auth/auth";
import BurgerMenu from "../burgerMenu/burgerMenu";

const { NavLink } = require("react-router-dom");

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [isBrgOpen, setIsBrgOpen] = useState(false);

  const items = [
    { value: "Home", goTo: "/", isPrint: true },
    { value: "Teachers", goTo: "/teachers", isPrint: true },
    { value: "Favorites", goTo: "/favorites", isPrint: isAuth },
  ];

  return (
    <Conteiner>
      <header className="header">
        <Logo />
        <div className="authAndNav">
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
          <div
            className="burgerMenuBtn"
            onClick={() => {
              setIsBrgOpen(!isBrgOpen);
            }}
          >
            <HiMenu size={28} color={`var(--accent-color)`} />
          </div>
        </div>
      </header>
      <BurgerMenu
        items={items}
        isBrgOpen={isBrgOpen}
        setIsBrgOpen={setIsBrgOpen}
      />
    </Conteiner>
  );
}

export default Header;
