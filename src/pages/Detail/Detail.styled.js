import styled from "styled-components";

export const DetailWrapper = styled.div`
a{
    text-decoration: none;
    color: #454545;
}
  .head {
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    margin-top: 125px;
  }
  .productDetail {
    display: flex;
    gap: 55px;
    margin-top: 50px;
  }

  .productImage img {
    width: 100%;
    max-width: 650px;
    height: 600px;
    object-fit: contain;
    border: 1px solid #dddddd;
  }

  .productInfo h2 {
    font-size: 40px;
    font-weight: 600;
  }
  .stockSocial {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    .sku {
      margin-top: 10px;
      color: #888;
    }

    .stock {
      margin: 10px 0;
      color: green;
    }
    .socials {
      display: flex;
      gap: 8px;
    }

    .social {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }
  }

  .priceRow {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    .price {
      font-size: 32px;
      font-weight: 700;
    }

    .oldPrice {
      text-decoration: line-through;
      color: #aaa;
    }
  }

  .description {
    margin: 40px 0;
    line-height: 1.6;
    font-size: 16px;
    font-weight: 400;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 15px;
    .counter {
      display: flex;
      align-items: center;
      border-radius: 10px;
      border: 1px solid #ccc;
      button {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: white;
      }

      span {
        width: 40px;
        text-align: center;
      }
    }
  }

  .addToCart {
    padding: 12px 30px;
    border-radius: 10px;
    background: #454545;
    color: white;
  }

  .favorite {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  .infoDetail {
    width: 100%;
    margin-top: 40px;
    color: #454545;
    margin-bottom: 85px;
    h2 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .table-container {
      border: 1px solid #e2e2e2;
      border-radius: 8px;
      overflow: hidden;
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
      font-size: 16px;

      &:nth-child(odd) {
        background-color: #f9f9f9;
      }

      &:nth-child(even) {
        background-color: #ffffff;
      }
      .label {
        font-weight: 500;
        color: #888;
        flex: 1;
      }

      .value {
        font-weight: 400;
        text-align: right;
        flex: 2;
        color: #454545;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .head {
      margin-top: 30px;
    }
    .productDetail {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }
    .productImage img {
      height: 330px;
    }
    .productInfo h2 {
      font-size: 28px;
    }
    .stockSocial {
      margin-top: 28px;
    }

    .priceRow {
      gap: 20px;
      margin-top: 15px;
      .price {
        font-size: 28px;
      }
    }

    .description {
      margin: 30px 0;
      font-size: 16px;
      font-weight: 400;
    }

    .addToCart {
      display: none;
    }
    .favorite {
      width: 45px;
      height: 45px;
      border-radius: 10px;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;