import styled from "styled-components";
import { bgColors, textColors } from "../../theme";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  padding: 12px;

  .mobile-content {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobile-content {
      display: block;
    }

    .desktop-content {
      display: none;
    }
  }

  .search {
    display: block;
  }
  .search.unvisible {
    display: none;
  }
  .mobile-opening-content {
    display: none;
  }

  .mobile-opening-content.visible {
    display: block;
  }
  .buttonBurger.unvisible{
    display: none;
  }
  .iks{
    display: none;
  }
  .iks.visible{
    display: block;
  }
`;

export const MobileNavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  .burger {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 150px;
      height: 25px;
    }
    button{
      border: none;
      background-color: white;
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;

export const MobileInput = styled.div`
margin-top: 20px;
        position: relative;
        width: 100%;
        border: 1px solid ${bgColors.primary};
        border-radius: 100px;
        overflow: hidden;
    

    & input {
        width: 100%;
        height: 50px;
        padding: 14px 48px 14px 24px;
        border-radius: 100px;
        border: none;
        outline: none;
    }

    .search-icon-wrap {
        position: absolute;
        right: 24px;
        top: 14px;
    }
`

export const BurgerNav = styled.div`
`
export const NavTopSideBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #888888;
`;

export const CustomNavLinkBurger = styled(NavLink)`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  width: 100%;
  text-decoration: none;
  color: ${textColors.secondary};
  border-bottom: 1px solid #888888;
  padding-top: 15px;
  padding-bottom: 20px;
  cursor: pointer;
`;

export const CatalogButton = styled.div`

.catalog-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        height: 50px;
        padding: 14px 28px;
        border-radius: 100px;
        background-color: ${bgColors.primary};
        border: none;
        color: ${textColors.white};
        font-size: 16px;
        font-weight: 600;
        margin-top: 30px;
        cursor: pointer;
    }
`

    export const OrderPhoneButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: ${textColors.secondary};
`;

export const PhoneLink = styled.a`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${textColors.primary};
`;

export const NavTopSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;