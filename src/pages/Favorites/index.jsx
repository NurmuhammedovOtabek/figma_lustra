import React from 'react';
import { FavoritesWrapper } from './Favotites.styled';
import { Link } from 'react-router-dom';
import { lustra2 } from '../../assets';
import { CartIcon } from '../../components';

function Favorites(props) {
    return (
      <div className="container">
        <FavoritesWrapper>
          <div className="head">
            <h1>Избранные товары</h1>
          </div>
          <div className="goodsPost">
            <Link to="/detail" className="goodsLink">
              <div>
                <img src={lustra2} alt="" />
                <p>Встраиваемый светильник Novotech</p>
                <div className="price-wrapper">
                  <div className="price">
                    <p className="old">7 000₽</p>
                    <p className="new">6 399₽</p>
                  </div>
                  <button className="cart-btn">
                    <CartIcon color="white" width={16} height={16} />
                  </button>
                </div>
              </div>
            </Link>
            <Link to="/detail" className="goodsLink">
              <div>
                <img src={lustra2} alt="" />
                <p>Встраиваемый светильник Novotech</p>
                <div className="price-wrapper">
                  <div className="price">
                    <p className="old">7 000₽</p>
                    <p className="new">6 399₽</p>
                  </div>
                  <button className="cart-btn">
                    <CartIcon color="white" width={16} height={16} />
                  </button>
                </div>
              </div>
            </Link>
            <Link to="/detail" className="goodsLink">
              <div>
                <img src={lustra2} alt="" />
                <p>Встраиваемый светильник Novotech</p>
                <div className="price-wrapper">
                  <div className="price">
                    <p className="old">7 000₽</p>
                    <p className="new">6 399₽</p>
                  </div>
                  <button className="cart-btn">
                    <CartIcon color="white" width={16} height={16} />
                  </button>
                </div>
              </div>
            </Link>
            <Link to="/detail" className="goodsLink">
              <div>
                <img src={lustra2} alt="" />
                <p>Встраиваемый светильник Novotech</p>
                <div className="price-wrapper">
                  <div className="price">
                    <p className="old">7 000₽</p>
                    <p className="new">6 399₽</p>
                  </div>
                  <button className="cart-btn">
                    <CartIcon color="white" width={16} height={16} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </FavoritesWrapper>
      </div>
    );
}

export default Favorites;