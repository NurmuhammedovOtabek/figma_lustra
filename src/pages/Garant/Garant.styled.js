import styled from "styled-components";

export const GarantWrapper = styled.div`
  margin-bottom: 105px;
  a {
    text-decoration: none;
    color: #454545;
  }
  .headP {
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
  .garant {
    display: flex;
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
      }
      p {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 400;
      }
      ul {
        padding-left: 25px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
    .headP {
      margin-top: 30px;
    }
    .garant {
      flex-direction: column;
      gap: 25px;
      margin-top: 5px;
      h1 {
        font-size: 28px;
      }
      div {
        h2 {
          font-size: 20px;
        }
        p {
          margin-top: 10px;
        }
        ul {
          padding-left: 25px;
        }
      }
    }
  }
`;