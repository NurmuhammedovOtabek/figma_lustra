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

export const MiddlePostWrapper = styled.div`
  .mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobile {
      display: block;
    }
    .desctop{
      display: none;
    }
  }
`;

export const MiddlePostMobile = styled.div`
  margin-top: 50px;
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  .middleHead {
    h3 {
      font-size: 28px;
      font-weight: 700;
      color: #454545;
      padding-left: 0;
      /* margin-left: -45px; */
    }
  }

  .middlePostDiv {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 30px;
    width: 100%;
    div {
      width: 100%;
      max-width: 160px;
      height: 230px;
      border: 1px solid #d9d9d9;
      padding: 15px;
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: #454545;
      }
      .p1 {
        font-size: 16px;
        font-weight: 700;
        margin-top: 10px;
      }
      .p2 {
        font-size: 14px;
        font-weight: 400;
        margin-top: 10px;
        line-height: 130%;
      }
    }
  }
  button {
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    max-width: 325px;
    max-height: 50px;
    border: 1px solid #454545;
    border-radius: 100px;
    padding: 14px 100px;
    background-color: white;
  }
  span {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`; 
