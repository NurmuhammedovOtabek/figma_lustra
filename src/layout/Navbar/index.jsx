import React, { useRef } from "react";
import NavbarTop from "./components/NavbarTop";
import NavbarMain from "./components/NavbarMain";

import {
  BurgerNav,
  CatalogButton,
  CustomNavLinkBurger,
  MobileInput,
  MobileNavbarWrapper,
  NavbarWrapper,
  NavTopSide,
  NavTopSideBurger,
  OrderPhoneButton,
  PhoneLink,
} from "./Navbar.styled";
import { Burger, CartIcon, CatalogIcon, HeartIcon, Iks, SearchIcon } from "../../components";
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
              <NavLink to="/favorites">
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
            <CustomNavLinkBurger to="/shipping">
              Доставка и оплата
            </CustomNavLinkBurger>
            <CustomNavLinkBurger to="/return">Возврат</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/garant">Гарантии</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/contact">Контакты</CustomNavLinkBurger>
            <CustomNavLinkBurger to="/blog">Блог</CustomNavLinkBurger>
          </NavTopSideBurger>
        </BurgerNav>
      <CatalogButton>
        <Link to="/catalog">
          <button className="catalog-button">
            <CatalogIcon />
            <span>Каталог</span>
          </button>
        </Link>
        <NavTopSide>
                  <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
                  <OrderPhoneButton>Заказать звонок</OrderPhoneButton>
                </NavTopSide>
      </CatalogButton>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
