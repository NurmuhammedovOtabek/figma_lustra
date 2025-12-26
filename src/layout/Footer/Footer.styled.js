import styled from "styled-components";
import { bgColors, textColors } from "../../theme";
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: ${bgColors.lightBlue};
  height: 540px;
  padding: 79px 310px;

  .container {
    display: flex;
    gap: 140px;
  }
  @media screen and (max-width: 768px) {
    /* max-width: 360px; */
    width: 100%;
    height: 1360px;
    padding: 45px 16px;
    .container{
      flex-direction: column;
      gap: 35px;
    }
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #454545;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
`;

export const CustomNavLinkFooter = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: ${textColors.secondary};
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  .imglogo {
    margin-bottom: 20px;
  }
  .a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: ${textColors.secondary};
  }
  @media screen and (max-width: 768px) {
    img{
      width: 135px;
      height: 25px;
      object-fit: contain;
    }
    .imglogo {
      margin-bottom: 20px;
      width: 150px;
      height: 25px;
      object-fit: contain;
    }
  }
`;

export const PhoneLinkFooter = styled.a`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${textColors.primary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;



export const FooterRight = styled.div`
  display: flex;
  gap: 135px;
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 35px;
  }
`;

export const ForBuyFooter = styled.div`
  h3 {
    margin-bottom: 32px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const ProductFooter = styled.div`
  h3 {
    margin-bottom: 32px;
  }
  div {
    display: flex;
    gap: 70px;
    .productdiv {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      flex-direction: column;
      gap: 30px;
    }
  }
`;
