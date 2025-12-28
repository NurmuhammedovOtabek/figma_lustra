import React from 'react';
import { PhoneLinkC, WrapperContact } from './Contact.styled';
import { VektorJustRight } from '../../components';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
      <WrapperContact>
        <div className="container">
          <p className="headP">
            <span>
              <Link to='/'>Главная</Link>
            </span>
            <VektorJustRight />
            Контакты
          </p>
          <div className="contact">
            <h1>Контакты</h1>
            <div>
              <PhoneLinkC href="tel:88008904656">8 (800) 890-46-56</PhoneLinkC>
              <p>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: </p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5856.290409377695!2d69.20312244829073!3d41.28474902728051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e1!3m2!1sru!2s!4v1766744019874!5m2!1sru!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="inMap">
            <div className="infoWrapper">
              <div>
                <p className="headInMap">Адрес магазина</p>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </div>
              <div>
                <p className="headInMap">Почта</p>
                <p>NORNLIGHT@mail.ru</p>
              </div>
              <div>
                <p className="headInMap">Телефон</p>
                <p>
                  <PhoneLinkC className="phoneInMap">
                    8 (800) 890-46-56
                  </PhoneLinkC>
                </p>
              </div>
            </div>
            <button className="button-inMap">Оставить заявку</button>
          </div>
        </div>
      </WrapperContact>
    );
}

export default Contact;