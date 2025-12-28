import styled from "styled-components";

export const ReturnWrapper = styled.div`
  margin-bottom: 125px;
  a {
    text-decoration: none;
    color: #454545;
  }
  .headWrapper {
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    margin-top: 125px;
    span {
      color: #888888;
    }
  }
  .return {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 340px;
    margin-top: 15px;
    h1 {
      font-size: 64px;
      font-weight: 700;
    }
    div {
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: #000000;
        margin-top: 20px;
      }
      p {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 400;
      }
      .ulDiv {
        padding-left: 20px;
        margin-top: 25px;
        li {
          color: #556086;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
    .headWrapper {
      margin-top: 30px;
    }
    .return {
      flex-direction: column;
      gap: 30px;
      margin-top: 15px;
      h1 {
        font-size: 28px;
      }
      div {
        h2 {
          font-size: 20px;
          margin-top: 20px;
        }
        p {
          margin-top: 10px;
          font-size: 16px;
        }
        .ulDiv {
          padding-left: 20px;
          margin-top: 10px;
          li {
            color: #556086;
          }
        }
      }
    }
  }
`;