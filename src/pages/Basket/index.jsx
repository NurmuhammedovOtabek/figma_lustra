import React from 'react';
import BasketKorzina from './components/BasketPageKorzina';
import BaskedForming from './components/BasketPageForming';
import BasketPayment from './components/BasketPagePayment';

function Basket(props) {
    return (
      <div className="container">
        <BasketKorzina/>
        <BaskedForming/>
        <BasketPayment/>
      </div>
    );
}

export default Basket;