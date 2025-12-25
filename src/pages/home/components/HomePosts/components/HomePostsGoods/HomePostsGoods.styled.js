import styled from "styled-components";

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
