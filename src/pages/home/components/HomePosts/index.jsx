import React from "react";
import { VektorRight, Label, CartIcon } from "../../../../components";
import { CatalogPost, Goods, HeadWrapper, MiddlePost } from "./HomePosts.styled";
import lustra from "../../../../assets/lustra.png";
import lustra2 from "../../../../assets/lustra2.png";

function HomePosts(props) {
  return (
    <div className="container">
      <div>
        <HeadWrapper>
          <h3>Каталог</h3>
          <button>
            <span className="buttonSpan">
              Весь каталог <VektorRight />
            </span>
          </button>
        </HeadWrapper>
        <CatalogPost>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
        </CatalogPost>
      </div>
      <MiddlePost>
        <div className="middleHead">
          <h3>Почему NORNLIGHT?</h3>
          <button>
            <span className="buttonSpan">
              О компании <VektorRight />
            </span>
          </button>
        </div>
        <div className="middlePostDiv">
          <div>
            <span>
              <Label />
            </span>
            <p className="p1">Только проверенные бренды</p>
            <p className="p2">Бренды, проверенные временем и качеством</p>
          </div>
          <div>
            <span>
              <Label />
            </span>
            <p className="p1">Только проверенные бренды</p>
            <p className="p2">Бренды, проверенные временем и качеством</p>
          </div>
          <div>
            <span>
              <Label />
            </span>
            <p className="p1">Только проверенные бренды</p>
            <p className="p2">Бренды, проверенные временем и качеством</p>
          </div>
          <div>
            <span>
              <Label />
            </span>
            <p className="p1">Только проверенные бренды</p>
            <p className="p2">Бренды, проверенные временем и качеством</p>
          </div>
        </div>
      </MiddlePost>
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

export default HomePosts;
