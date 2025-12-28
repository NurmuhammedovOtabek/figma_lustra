import styled from "styled-components";

export const BasketKozinaMain = styled.div`
  a{
    text-decoration: none;
    color: #454545;
  }
  .korzinaMobile {
    display: none;
  }
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
    width: 100%;
    max-width: 1300px;
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
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    .kH2 {
      margin-top: 5px;
      font-size: 28px;
    }
    .korzina {
      display: none;
    }
    .korzinaMobile {
      display: block;
      .korzina-item {
        display: flex;
        gap: 15px;
        /* flex-direction: column; */
        align-items: start;
        justify-content: center;
        margin-top: 30px;
        font-size: 16px;
        font-weight: 600;
        color: #666666;
        /* border-top: 1px solid #e2e2e2; */
        padding: 15px;
        background-color: #f2f2f2;
        border-radius: 20px;
        height: 355px;
        width: 100%;
        .imgdiv {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 30px;
            height: 35px;
            object-fit: contain;
          }
        }
        .yozuv{
          display: flex;
          flex-direction: column;
          justify-content: center;
          /* align-items: center; */
          gap: 12px;
        }
        .img-price {
          display: flex;
          gap: 35px;

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
        .counterDel{
          display: flex;
          align-items: center;
          gap: 85px;
        }
      }
    }
  }
`;