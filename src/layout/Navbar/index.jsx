import React, { useRef } from "react";
import NavbarTop from "./components/NavbarTop";
import NavbarMain from "./components/NavbarMain";

import {
  BurgerNav,
  CustomNavLinkBurger,
  MobileInput,
  MobileNavbarWrapper,
  NavbarWrapper,
  NavTopSideBurger,
} from "./Navbar.styled";
import { Burger, CartIcon, HeartIcon, Iks, SearchIcon } from "../../components";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const mobNavRef = useRef(null);
  const mobNavRef2 = useRef(null);
  const burgerRef = useRef(null);
  const iksRef = useRef(null);

  const handleOpen = () => {
    mobNavRef.current.classList.toggle("visible");
    mobNavRef2.current.classList.toggle("unvisible");
    iksRef.current.classList.toggle("visible");
    burgerRef.current.classList.toggle("unvisible");
  };

  return (
    <NavbarWrapper>
      <div className="container desktop-content">
        <NavbarTop />
        <NavbarMain />
      </div>

      <div className="container mobile-content">
        <MobileNavbarWrapper>
          <div className="burger">
            <button onClick={handleOpen}>
              <span ref={burgerRef} className="buttonBurger">
                <Burger />
              </span>
              <span ref={iksRef} className="iks">
                <Iks />
              </span>
            </button>
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="icons">
            <div className="item">
              <NavLink to="/">
                <HeartIcon />
              </NavLink>
            </div>
            <div className="item">
              <NavLink to="/basket">
                <CartIcon />
              </NavLink>
            </div>
          </div>
        </MobileNavbarWrapper>
        <div ref={mobNavRef2} className="search">
          <MobileInput>
            <input type="text" placeholder="Поиск по товарам" />
            <span className="search-icon-wrap">
              <SearchIcon />
            </span>
          </MobileInput>
        </div>
      </div>
      <div ref={mobNavRef} className="mobile-opening-content">
        <BurgerNav>
          <NavTopSideBurger>
            <CustomNavLinkBurger to="/about">О компании</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/">Доставка и оплата</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/">Возврат</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/">Гарантии</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/">Контакты</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/">Блог</CustomNavLinkBurger>
          </NavTopSideBurger>
        </BurgerNav>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
