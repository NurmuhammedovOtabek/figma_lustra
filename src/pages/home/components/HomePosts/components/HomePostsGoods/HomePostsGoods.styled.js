import styled from "styled-components";

export const HomeGoodsStyled = styled.div`
  .mobile{
    display: none;
  }
  @media screen and (max-width: 768px) {
    .desctop {
      display: none;
    }
    .mobile{
      display: block;
    }
  }
`;