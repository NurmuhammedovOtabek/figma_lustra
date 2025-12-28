import React from 'react';
import { AllProductsWrapper } from './AllProduct.styled';
import { CartIcon, VektorJustRight } from '../../components/icons';
import { lustra2 } from '../../assets';
import { Link } from 'react-router-dom';

function AllProducts(props) {
    return (
      <div className="container">
        <AllProductsWrapper>
          <p className="head">
             <Link to="/">Главная</Link> <VektorJustRight />
          </p>
          <div className="goodsHead">
            <h3 className="headH3">Популярные товары</h3>
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
        </AllProductsWrapper>
      </div>
    );
}

export default AllProducts;