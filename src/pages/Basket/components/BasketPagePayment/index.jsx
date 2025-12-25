import React from 'react';
import { PaymentBasket } from './BasketPayment.styled';

function BasketPayment(props) {
    return (
      <PaymentBasket>
        <h3>Оплата</h3>
        <div className="basketdiv">
          <p>
            Товары.............................................
            <span>12 300₽</span>
          </p>
          <p>
            Доставка..............................................{" "}
            <span>580₽</span>
          </p>
        </div>
        <h3 className="price">12 800₽</h3>
        <div className="buy">
          <button>Купить</button>
          <label className="agree">
            <input type="checkbox" />
            <span className="checkmark"></span>Я согласен наобработку моих
            персональных данных
          </label>
        </div>
      </PaymentBasket>
    );
}

export default BasketPayment;