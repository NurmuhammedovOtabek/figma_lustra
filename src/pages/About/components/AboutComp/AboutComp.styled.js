import styled from "styled-components";

export const WrapperAboutComp = styled.div`
  .WrapperHead {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 12px;
    margin-top: 125px;
    .kSpan {
      color: #454545;
      padding-right: 12px;
    }
  }
  .wrapperContent {
    display: flex;
    gap: 100px;
    align-items: center;
    .comp {
      h1 {
        font-size: 64px;
        font-weight: 700;
        color: #454545;
        margin-top: 15px;
      }
      .boxWrapper {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          width: 530px;
          height: 250px;
          background-color: #f2f2f2;
          border-radius: 15px;
          .divIchki {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 30px;
            h2 {
              font-size: 64px;
              font-weight: 700;
            }
            p {
              font-size: 24px;
              font-weight: 500;
            }
          }
        }
      }
    }
    .text {
      font-size: 20px;
      font-weight: 500;
      color: #454545;
    }
  }

  @media screen and (max-width: 768px) {
    .wrapperContent {
      display: flex;
      flex-direction: column;
      gap: 25px;
      /* align-items: center; */
      .comp {
        width: 100%;
        h1 {
          font-size: 28px;
          margin-top: 10px;
        }
        .boxWrapper {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          div {
            width: 100%;
            min-width: 325px;
            height: 195px;
            background-color: #f2f2f2;
            border-radius: 15px;
            .divIchki {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 25px;
              h2 {
                font-size: 64px;
                font-weight: 700;
              }
              p {
                font-size: 16px;
                font-weight: 500;
              }
            }
          }
        }
      }
      .text {
        font-size: 16px;
      }
    }
  }
`;