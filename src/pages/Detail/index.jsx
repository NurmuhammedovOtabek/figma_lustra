import React from 'react';
import { HeartIcon, VektorJustRight } from '../../components/icons';
import { DetailWrapper } from './Detail.styled';
import { lustra2 } from '../../assets';
import { Link } from 'react-router-dom';

function Detail(props) {
    const data = [
      { label: "Цвет", value: "Жёлтый" },
      { label: "Год", value: "2016" },
      { label: "Диаметр колеса", value: "27.5" },
      { label: "Материал рамы", value: "Карбон" },
      { label: "Размер", value: "L" },
      { label: "Страна", value: "Швейцария" },
      { label: "Производитель", value: "Scott" },
      {
        label: "Покрышки",
        value:
          "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
      },
      {
        label: "Рама",
        value:
          "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
      },
      {
        label: "Подседельный Штырь",
        value:
          "Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
      },
      { label: "Седло", value: "Ritchey WCS Streem V3 Titanium rails" },
      {
        label: "Вилка",
        value:
          "Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm",
      },
    ];
    return (
      <div className="container">
        <DetailWrapper>
          <p className="head">
            <Link to="/">Главная</Link> <VektorJustRight />
            <Link to="/allproduct">Популярные товары</Link>
          </p>
          <div className="productDetail">
            <div className="productImage">
              <img src={lustra2} alt="product" />
            </div>

            <div className="productInfo">
              <h2>Встраиваемый светильник Novotech</h2>
              <div className="stockSocial">
                <div>
                  <p className="sku">Scott</p>
                  <p className="sku">Артикул: 7655-188</p>
                  <p className="stock">В наличии</p>
                </div>
                <div className="socials">
                  <span className="social">WK</span>
                  <span className="social">WK</span>
                  <span className="social">WK</span>
                </div>
              </div>
              <div className="priceRow">
                <span className="price">435 000 ₽</span>
                <span className="oldPrice">522 000 ₽</span>
              </div>

              <p className="description">
                Профессиональный гоночный картинг для кросс-кантри уровня
                Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
                картов для кросс-кантри.
              </p>

              <div className="actions">
                <div className="counter">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <button className="addToCart">В корзину</button>
                <button className="favorite">
                  <HeartIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="infoDetail">
            <h2>Характеристика</h2>
            <div className="table-container">
              {data.map((item, index) => (
                <div className="row" key={index}>
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </DetailWrapper>
      </div>
    );
}

export default Detail;