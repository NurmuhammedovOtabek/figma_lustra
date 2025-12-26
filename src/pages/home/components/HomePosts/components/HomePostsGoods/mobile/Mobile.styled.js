import styled from "styled-components";

export const GoodsMobile = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* align-items: center; */
  width: 100%;
  .goodsHead {
    margin-top: 60px;
    .headH3 {
      font-size: 28px;
      font-weight: 700;
      color: #454545;
      /* margin-left: -30px; */
    }
  }
  .headButton {
    margin-top: 30px;
    width: 325px;
    height: 50px;
    border: 1px solid #454545;
    border-radius: 100px;
    padding: 14 100px;
    background-color: white;
    cursor: pointer;
  }
  .buttonSpan{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .goodsPost {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
    gap: 5px;

    & > div {
      width: 100%;
      max-width: 160px;
      height: 280px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.3s;

      img {
        width: 100%;
        height: 125px;
        object-fit: contain;
        margin-bottom: 15px;
      }

      p {
        font-size: 16px;
        font-weight: 500;
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
            font-size: 12px;
            font-weight: 500;
            color: #888;
            margin: 0;
          }
          .new {
            font-size: 16px;
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
