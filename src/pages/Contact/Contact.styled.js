import styled from "styled-components";
import { textColors } from "../../theme";

export const WrapperContact = styled.div`
a{
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
  .contact {
    display: flex;
    justify-content: space-between;
    gap: 765px;
    h1 {
      font-size: 64px;
      font-weight: 700;
      margin-top: 15px;
    }
    div {
      p {
        font-size: 16px;
        font-weight: 400;
        color: #454545;
        margin-top: 10px;
      }
    }
  }
  .map {
    margin-top: 60px;
    margin-bottom: 90px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 1800px;
    width: 100%;
    iframe {
      width: 100%;
      max-width: 1800px;
      height: 670px;
      border-radius: 15px;
    }
  }
  .inMap {
    width: calc(100% - 30px);
    /* flex-wrap: wrap; */
    max-width: 1300px;
    height: 180px;
    border-radius: 15px;
    background-color: #ffffff;
    position: absolute;
    z-index: 10;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
    padding: 60px;
    display: flex;
    justify-content: space-between;
    gap: 80px;
    .infoWrapper {
      display: flex;
      /* flex-wrap: wrap; */
      justify-content: center;
      gap: 135px;
      .headInMap {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
    .phoneInMap {
      font-size: 16px;
      font-weight: 400;
      color: #454545;
    }
    .button-inMap {
      max-width: 215px;
      width: 100%;
      height: 50px;
      border-radius: 100px;
      color: white;
      background-color: #454545;
    }
  }

  @media screen and (max-width: 768px) {
    .headP {
      margin-top: 30px;
    }
    .contact {
      flex-direction: column;
      gap: 30px;
      h1 {
        font-size: 28px;
        margin-top: 5px;
      }
    }
    .map {
      margin-top: 30px;
      margin-bottom: 10px;
      position: static;
      min-width: 330;
      width: 100%;
      iframe {
        height: 350px;
        border-radius: 15px;
      }
    }
    .inMap {
      width: 100%;
      max-width: 330px;
      height: 400px;
      border-radius: 15px;
      position: static;
      transform: translateX(0);
      padding: 25px;
      flex-direction: column;
      gap: 30px;
      margin: 0 auto;
      .infoWrapper {
        flex-direction: column;
        gap: 25px;
        .headInMap {
          font-size: 20px;
        }
      }

      .button-inMap {
        width: 100%;
        max-width: 260px;
        height: 50px;
        border-radius: 100px;
        color: white;
        background-color: #454545;
      }
    }
  }
`;

export const PhoneLinkC = styled.a`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: ${textColors.primary};
`;