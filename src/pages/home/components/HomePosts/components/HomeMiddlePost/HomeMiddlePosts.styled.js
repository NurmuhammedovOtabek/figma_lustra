import styled from "styled-components";

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
