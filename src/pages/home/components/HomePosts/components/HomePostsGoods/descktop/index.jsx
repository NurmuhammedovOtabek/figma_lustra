import React from 'react';
import { GoodsDesctop } from './Descktop.styled';
import { VektorRight, CartIcon } from "../../../../../../../components";

import lustra2 from "../../../../../../../assets/lustra2.png";
import { Link } from 'react-router-dom';

function Goods(props) {
    return (
      <GoodsDesctop>
        <div className="goodsHead">
          <h3 className="headH3">Популярные товары</h3>
          <button className="headButton">
            <span className="buttonSpan">
              <Link to="/allproduct">
                Все товары <VektorRight />
              </Link>
            </span>
          </button>
        </div>
        <div className="goodsPost">
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
        </div>
      </GoodsDesctop>
    );
}

export default Goods;