import React from "react";
import { VektorRight, CartIcon } from "../../../../../../components";

import lustra2 from "../../../../../../assets/lustra2.png";
import { Goods } from "./HomePostsGoods.styled";

function HomeGoods(props) {
  return (
    <div>
      <Goods>
        <div className="goodsHead">
          <h3>Популярные товары</h3>
          <button>
            <span className="buttonSpan">
              Все товары <VektorRight />
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
      </Goods>
    </div>
  );
}

export default HomeGoods;
