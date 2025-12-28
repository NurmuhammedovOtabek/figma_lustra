import React from 'react';
import { FormingWrapper } from './BasketForming.stayled';

function BaskedForming(props) {
    return (
      <FormingWrapper>
        <div className="forming">
          <h3>Оформление</h3>
          <div className='inputWrapper'>
            <input type="text" placeholder="ФИО" />
            <input type="tel" placeholder="телефон" />
            <input type="email" placeholder="Электронная почта" />
          </div>
        </div>
        <div className="delivery">
          <h3>Доставка</h3>
          <div>
            <input type="text" placeholder="Адрес доставки" />
            <textarea name="" id="" placeholder="Комментарий"></textarea>
          </div>
        </div>
      </FormingWrapper>
    );
}

export default BaskedForming;