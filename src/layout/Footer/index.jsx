import React from "react";
import {
  CustomNavLinkFooter,
  FooterLeft,
  FooterRight,
  FooterWrapper,
  ForBuyFooter,
  PhoneLinkFooter,
  ProductFooter,
  SocialIcon,
  WrapperIcon,
} from "./Footer.styled";

import PaymentLogos from "../../assets/payments.png";

function Footer(props) {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterLeft>
          <img src="/logo-foot.svg" alt="Logo Footer" className="imglogo" />
          <PhoneLinkFooter href="tel:88008904656">
            8 (800) 890-46-56
          </PhoneLinkFooter>

          <img src={PaymentLogos} alt="Payments" />

          <a href="/" className="a">
            Политика конфидециальности
          </a>
          <a href="/" className="a">
            Пользовательское соглашение
          </a>
          <WrapperIcon>
            <SocialIcon>VK</SocialIcon>
            <SocialIcon>VK</SocialIcon>
            <SocialIcon>VK</SocialIcon>
          </WrapperIcon>
        </FooterLeft>
        <FooterRight>
          <ForBuyFooter>
            <h3>Покупателям</h3>
            <div>
              <CustomNavLinkFooter to="/about">О компании</CustomNavLinkFooter>
              <CustomNavLinkFooter to="/">
                Доставка и оплата
              </CustomNavLinkFooter>
              <CustomNavLinkFooter to="/">Возврат</CustomNavLinkFooter>
              <CustomNavLinkFooter to="/">Гарантии</CustomNavLinkFooter>
              <CustomNavLinkFooter to="/">Контакты</CustomNavLinkFooter>
              <CustomNavLinkFooter to="/">Блог</CustomNavLinkFooter>
            </div>
          </ForBuyFooter>
          <ProductFooter>
            <h3>Товары</h3>
            <div>
              <div className="productdiv">
                <CustomNavLinkFooter to="/">Люстры</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">Светильники</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">Бра</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">Торшеры</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">Комплектуюшие</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">
                  Настольные лампы
                </CustomNavLinkFooter>
              </div>
              <div className="productdiv">
                <CustomNavLinkFooter to="/">Споты</CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">
                  Трековые светильники
                </CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">
                  Уличные светильники
                </CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">
                  Технические светильники
                </CustomNavLinkFooter>
                <CustomNavLinkFooter to="/">
                  Светодиодные ленты
                </CustomNavLinkFooter>
              </div>
            </div>
          </ProductFooter>
        </FooterRight>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
