import React from 'react';
import {
    CartIcon,
    CatalogIcon,
    HeartIcon,
    NetworkIcon,
    SearchIcon
} from '../../../../components';

import { NavMainWrapper, SearchWrapper, NavigationItems } from './NavbarMain.styled';
import { Link, NavLink } from 'react-router-dom';

function NavbarMain(props) {
    return (
      <NavMainWrapper>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <SearchWrapper>
          <Link to="/catalog">
            <button className="catalog-button">
              <CatalogIcon />
              <span>Каталог</span>
            </button>
          </Link>
          <div className="input-wrapper">
            <input type="text" placeholder="Поиск по товарам" />
            <span className="search-icon-wrap">
              <SearchIcon />
            </span>
          </div>
        </SearchWrapper>
        <NavigationItems>
          <div className="item">
            <NavLink to="/favorites">
              <HeartIcon />
              <span>Избранное</span>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/">
              <NetworkIcon />
              <span>Сравнение</span>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/basket">
              <CartIcon />
              <span>Корзина</span>
            </NavLink>
          </div>
        </NavigationItems>
      </NavMainWrapper>
    );
}

export default NavbarMain;