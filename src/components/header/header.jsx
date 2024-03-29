import "./header.css";
import { useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

import Conteiner from "../conteiner/Conteiner";
import Logo from "../logo/logo";
import Auth from "../auth/auth";
import BurgerMenu from "../burgerMenu/burgerMenu";
import { nanoid } from "nanoid";

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
            <ul className="navList">
              {items.map((item) => {
                if (!item.isPrint) return null;
                return (
                  <li key={nanoid()} className="nav-link">
                    <NavLink to={item.goTo} className="nav-link-item">
                      {item.value}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
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
