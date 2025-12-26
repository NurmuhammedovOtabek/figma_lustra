import styled from "styled-components";

export const FormingWrapper = styled.div`
  width: 1300px;
  height: 630px;
  border-radius: 20px;
  background-color: #f2f2f2;
  margin-top: 20px;
  padding: 45px 48px;
  .forming {
    border-bottom: 1px solid #454545;
    padding-bottom: 35px;
    h3 {
      font-size: 32px;
      font-weight: 700;
      color: #454545;
      margin-bottom: 30px;
    }
    input {
      width: 373px;
      height: 50px;
      border-radius: 100px;
      border: 1px solid #454545;
      padding: 15px 20px;
      margin-right: 20px;
      background-color: #f2f2f2;
    }
  }
  .delivery {
    margin-top: 35px;
    h3 {
      font-size: 32px;
      font-weight: 700;
      color: #454545;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      font-size: 16px;
      font-weight: 600;
      input {
        width: 765px;
        height: 50px;
        padding: 15px 20px;
        background-color: #f2f2f2;
        border-radius: 100px;
      }
      textarea {
        width: 765px;
        height: 150px;
        background-color: #f2f2f2;
        border-radius: 26px;
        padding: 20px 20px;
        margin-top: 30px;
        resize: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 635px;
    border-radius: 20px;
    background-color: #f2f2f2;
    margin-top: 10px;
    padding: 20px 15px;
    .forming {
      border-bottom: 1px solid #454545;
      padding-bottom: 30px;
      h3 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      input {
        width: 100%;
        height: 50px;
        border-radius: 100px;
        border: 1px solid #454545;
        padding: 15px 20px;
        margin-top: 10px;
      }
    }
    .delivery {
      margin-top: 35px;
      h3 {
        font-size: 32px;
        font-weight: 700;
        color: #454545;
      }
      div {
        input {
          width: 100%;
          border: 1px solid #454545;
        }
        textarea {
          width: 100%;
          height: 150px;
          border-radius: 26px;
          margin-top: 10px;
          resize: none;
        }
      }
    }
  }
`;   