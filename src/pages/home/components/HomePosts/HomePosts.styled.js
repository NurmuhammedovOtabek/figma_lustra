import styled from "styled-components";

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #454545;
  }
  button {
    max-width: 220px;
    max-height: 50px;
    border: 1px solid #454545;
    border-radius: 100px;
    padding: 14px 45px;
    background-color: white;
  }

  .buttonSpan {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CatalogPost = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin-top: 40px;
  .divCatalogPost {
    width: 420px;
    height: 250px;
    border-radius: 20px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }
  .divRighr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .span {
      font-size: 14px;
      font-weight: 500;
      color: #454545;
    }
    .h5 {
      font-size: 20px;
      font-weight: 500;
      color: #454545;
    }
  }
  .imgCatalog {
    width: 180px;
    height: 200px;
    object-fit: cover;
  }
`;

export const MiddlePost = styled.div`
  .middleHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    h3 {
      font-size: 40px;
      font-weight: 700;
      color: #454545;
    }
    button {
      max-width: 220px;
      max-height: 50px;
      border: 1px solid #454545;
      border-radius: 100px;
      padding: 14px 45px;
      background-color: white;
    }
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .middlePostDiv {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    margin-top: 40px;
    div {
      width: 310px;
      height: 360px;
      border: 1px solid #d9d9d9;
      padding: 40px;
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-color: #454545;
      }
      .p1 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 80px;
      }
      .p2 {
        font-size: 16px;
        font-weight: 400;
        margin-top: 20px;
        line-height: 130%;
      }
    }
  }
`;

export const Goods = styled.div`
  .goodsHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    h3 {
      font-size: 40px;
      font-weight: 700;
      color: #454545;
    }
    button {
      max-width: 220px;
      height: 50px; 
      border: 1px solid #454545;
      border-radius: 100px;
      padding: 0 45px; 
      background-color: white;
      cursor: pointer;
    }
  }

  .goodsPost {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    margin-top: 40px;
    margin-bottom: 100px; 

    & > div {
      width: 100%; 
      max-width: 325px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.3s;

      img {
        width: 100%;
        height: 200px;
        object-fit: contain; 
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.2;
        color: #454545;
        margin: 0 0 15px 0; 
      }

      .price-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-end; 

        .price {
          display: flex;
          flex-direction: column;
          gap: 2px; 

          .old {
            text-decoration: line-through;
            font-size: 14px;
            color: #888;
            margin: 0; 
          }
          .new {
            font-size: 20px;
            font-weight: 700;
            color: #454545;
            margin: 0; 
          }
        }

        .cart-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px; 
          height: 30px;
          border-radius: 100px;
          background-color: #454545;
          cursor: pointer;
          border: none;
          padding: 8 20;

          &:hover {
            background-color: #333;
          }
        }
      }
    }
  }
`;