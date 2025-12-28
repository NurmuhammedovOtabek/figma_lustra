import React from 'react';
import { ShippingWrapper } from './Shipping.styled';
import { VektorJustRight } from '../../components';
import { Link } from 'react-router-dom';

function Shipping(props) {
    return (
      <ShippingWrapper>
        <div className="container">
          <p className="headP">
            <span>
              <Link to='/'>Главная</Link>
            </span>
            <VektorJustRight />
            Доставка и оплата
          </p>
          <div className="buy">
            <h1>Доставка и оплата</h1>
            <div>
              <div>
                <h2>Доставка</h2>
                <p>
                  Мы осуществляем доставку со склада по Москве и Московской
                  области собственной курьерской службой. Транспортными
                  компаниями нашу продукцию мы доставляем по всей территории РФ,
                  а так же по всем странам СНГ. Сроки доставки: 4—6 недель
                </p>
              </div>
              <div>
                <h2>Курьерская доставка</h2>
                <p>
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5
                  000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку,
                  включительно 15 км от МКАД
                </p>
              </div>
              <div>
                <h2>Самовывоз</h2>
                <p>
                  Любой заказ можно забрать самостоятельно по адресу: г.
                  Москва, Дмитровское шоссе д.100с2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5856.290409377695!2d69.20312244829073!3d41.28474902728051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e1!3m2!1sru!2s!4v1766744019874!5m2!1sru!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ShippingWrapper>
    );
}

export default Shipping;