import React, { useState } from 'react';
import { BasketKozinaMain } from './BasketKorzina.styed';
import { DeletIcon, VektorJustRight } from '../../../../components';
import lustra from '../../../../assets/lustra2.png'
function BasketKorzina(props) {
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(1);

    return (
      <BasketKozinaMain>
        <div>
          <p className="kP">
            <span className="kSpan">Главная</span>{" "}
            <VektorJustRight color="#454545" />
            <span className="kSpan">Каталог</span> <VektorJustRight />
            Корзина
          </p>
          <h2 className="kH2">Корзина</h2>
        </div>
        <div className="korzina">
          <div className="korzina-header">
            <div>Фото</div>
            <div>Товары</div>
            <div>Описание</div>
            <div></div>
            <div>Артикул</div>
            <div>Количество</div>
          </div>
          <div className="korzina-item">
            <div className="img-price">
              <div className="imgdiv">
                <img src={lustra} alt="" />
              </div>

              <div className="priceWrapper">
                <p>Встраиваемый светильник Novotech</p>
                <p className="price">6 399₽</p>
              </div>
            </div>
            <div>Светильник RADUGA COMBO XS Промышленное Освещение...</div>

            <div>RAD-COMBO-50/XXX/230/XXX/</div>

            <div>
              <div className="counter">
                <button
                  onClick={() => {
                    setCount1(count1 - 1);
                  }}
                >
                  -
                </button>
                <span>{count1}</span>
                <button
                  onClick={() => {
                    setCount1(count1 + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="delIcon">
              <DeletIcon />
            </div>
          </div>
          <div className="korzina-item">
            <div className="img-price">
              <div className="imgdiv">
                <img src={lustra} alt="" />
              </div>

              <div className="priceWrapper">
                <p>Встраиваемый светильник Novotech</p>
                <p className="price">6 399₽</p>
              </div>
            </div>
            <div>Светильник RADUGA COMBO XS Промышленное Освещение...</div>

            <div>RAD-COMBO-50/XXX/230/XXX/</div>

            <div>
              <div className="counter">
                <button
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="delIcon">
              <DeletIcon />
            </div>
          </div>
        </div>
        <div className="korzinaMobile">
          <div className="korzina-item">
            <div className="imgdiv">
              <img src={lustra} alt="" />
            </div>
            <div className="yozuv">
              <div className="img-price">
                <div className="priceWrapper">
                  <p>Встраиваемый светильник Novotech</p>
                  <p className="price">6 399₽</p>
                </div>
              </div>
              <div>Светильник RADUGA COMBO XS Промышленное Освещение...</div>

              <div>RAD-COMBO-50/XXX/230/XXX/</div>

              <div className="counterDel">
                <div className="counter">
                  <button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="delIcon">
                  <DeletIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="korzina-item">
            <div className="imgdiv">
              <img src={lustra} alt="" />
            </div>
            <div className="yozuv">
              <div className="img-price">
                <div className="priceWrapper">
                  <p>Встраиваемый светильник Novotech</p>
                  <p className="price">6 399₽</p>
                </div>
              </div>
              <div>Светильник RADUGA COMBO XS Промышленное Освещение...</div>

              <div>RAD-COMBO-50/XXX/230/XXX/</div>

              <div className="counterDel">
                <div className="counter">
                  <button
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="delIcon">
                  <DeletIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasketKozinaMain>
    );
}

export default BasketKorzina;