import styled from "styled-components";

export const Ads = styled.div`
  .adsHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 40px;
      font-weight: 700;
      color: #454545;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      button {
        width: 40px;
        height: 25px;
        border: 1px solid #000000;
        background-color: #fff;
        border-radius: 100px;
      }
    }
  }

  .adsWrapper{
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    margin-top: 70px;
  }

  .ads {
    display: flex;
    justify-content: center;
    width: 310px;
    height: 110px;
    border: 1px solid #d9d9d9;
    text-align: center;
  }
`; 

export const Blog = styled.div`
  .blogHead {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 105px;
    p {
      font-size: 40px;
      font-weight: 700;
      color: #454545;
    }
    button {
      width: 220px;
      height: 50px;
      border-radius: 100px;
      padding: 14px 40px;
      background-color: white;
    }
  }

  .blogFoto {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    margin-top: 50px;
    .blogFotoDiv {
      width: 420px;
      /* height: 455px; */
      border-bottom: 0.5px solid gray;
      img {
        width: 420px;
        height: 320px;
        object-fit: cover;
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
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 330px;
  margin-top: 100px;
  margin-bottom: 100px;
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;