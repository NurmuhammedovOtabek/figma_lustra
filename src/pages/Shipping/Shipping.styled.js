import styled from "styled-components";

export const ShippingWrapper = styled.div`
  a {
    text-decoration: none;
    color: #454545;
  }
  .headP {
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    margin-top: 125px;
    span {
      color: #888888;
    }
  }
  .buy {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 340px;
    margin-top: 15px;
    h1 {
      font-size: 64px;
      font-weight: 700;
    }
    div {
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: #000000;
        margin-top: 20px;
      }
      p {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
  .cart {
    margin-top: 115px;
    margin-bottom: 120px;
    iframe {
      width: 100%;
      max-width: 1800px;
      height: 670px;
      border-radius: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    .headP {
      margin-top: 30px;
      span {
        color: #888888;
      }
    }
    .buy {
      flex-direction: column;
      gap: 30px;
      margin-top: 5px;
      h1 {
        font-size: 28px;
      }
      div {
        h2 {
          font-size: 20px;
          margin-top: 20px;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
    .cart {
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 0 16px;
      iframe {
        width: 100%;
        max-width: 1800px;
        height: 240px;
      }
    }
  }
`;