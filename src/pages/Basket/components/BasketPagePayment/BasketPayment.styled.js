import styled from "styled-components";

export const PaymentBasket = styled.div`
  width: 1300px;
  height: 360px;
  border-radius: 20px;
  background-color: #f2f2f2;
  margin-top: 60px;
  margin-bottom: 80px;
  padding: 50px 50px;
  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #454545;
  }
  .basketdiv {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 40px;
    margin-top: 30px;
    color: #888888;
    font-size: 16px;
    font-weight: 600;
  }
  .price {
    margin-top: 70px;
    font-size: 24px;
  }
  .buy {
    margin-top: 30px;
    display: flex;
    gap: 25px;
    button {
      width: 325px;
      height: 50px;
      border-radius: 100px;
      background-color: #454545;
      color: white;
    }
    .agree {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      input {
        display: none;
      }
      .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #454545;
        border-radius: 50%; /* 🔥 DUMALOQ */
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .checkmark::after {
        content: "✔";
        font-size: 14px;
        color: #454545;
        display: none;
      }
    }
    /* .agree input:checked + .checkmark {
      background-color: #454545;
    } */

    .agree input:checked + .checkmark::after {
      display: block;
    }
  }
`;