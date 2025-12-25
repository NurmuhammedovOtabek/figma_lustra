import styled from "styled-components";

export const BasketKozinaMain = styled.div`
  margin-top: 125px;
  .kP {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    .kSpan {
      color: #454545;
    }
  }
  .kH2 {
    margin-top: 15px;
    font-size: 64px;
    font-weight: 700;
    color: #454545;
  }
  .korzina {
    width: 1300px;
    height: 385px;
    background-color: #f2f2f2;
    border-radius: 20px;
    margin-top: 40px;
    padding: 35px 45px;
    .korzina-header {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 1fr 1.5fr 1fr;
      /* padding-bottom: 30px; */
      color: #888;
      font-size: 14px;
    }
    .korzina-item {
      display: flex;
      gap: 60px;
      align-items: start;
      justify-content: center;
      margin-top: 35px;
      font-size: 16px;
      font-weight: 600;
      color: #666666;
      border-top: 1px solid #e2e2e2;
      padding-top: 35px;
      .img-price {
        display: flex;
        gap: 35px;
        .imgdiv {
          width: 80px;
          height: 80px;
          border-radius: 15px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 50px;
            height: 60px;
            object-fit: contain;
          }
        }
        .priceWrapper {
          .price {
            font-size: 20px;
            font-weight: 700;
            margin-top: 20px;
            color: #454545;
          }
        }
      }
      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        button {
          border: none;
          background-color: #f2f2f2;
          cursor: pointer;
        }
        span {
          display: inline-flex;
          border: 1px solid #666666;
          width: 60px;
          height: 60px;
          justify-content: center;
          align-items: center;
          /* padding: 19px 25px; */
          border-radius: 10px;
        }
      }
      .delIcon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;