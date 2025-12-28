import styled from "styled-components";

export const BlogMainWrapper = styled.div`
  margin-bottom: 60px;
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
    a {
      text-decoration: none;
      color: #454545;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    .headP {
      margin-top: 30px;
    }
  }
`;


export const BlogWrapper = styled.div`
  .blogHead {
    /* display: flex;
    justify-content: space-between;
    text-align: center; */
    margin-top: 15px;
    margin-bottom: 60px;
    p {
      font-size: 64px;
      font-weight: 700;
      color: #454545;
    }
  }

  .blogFoto {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    gap: 20px;
    margin-top: 20px;
    .blogFotoDiv {
      width: 100%;
      max-width: 420px;
      /* height: 455px; */
      border-bottom: 0.5px solid gray;
      img {
        width: 100%;
        max-width: 420px;
        height: 320px;
        object-fit: cover;
        border-radius: 10px;
      }
      div {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        gap: 75px;
        p {
          font-size: 20px;
          font-weight: 700;
          /* line-height: 130%; */
          color: #454545;
        }
      }
      .blogp {
        margin-top: 25px;
        margin-bottom: 30px;
        color: #454545;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
    .blogFoto {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 50px;
      .blogFotoDiv {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 100%;
        /* height: 455px; */
        border-bottom: 0.5px solid gray;
        img {
          width: 100%;
          height: 305px;
          object-fit: cover;
          border-radius: 10px;
        }
        div {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          gap: 75px;
          p {
            font-size: 20px;
            font-weight: 700;
            /* line-height: 130%; */
            color: #454545;
          }
        }
        .blogp {
          margin-top: 25px;
          margin-bottom: 30px;
          color: #454545;
        }
      }
    }
  }
`;
