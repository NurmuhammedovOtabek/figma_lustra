import styled from "styled-components";

export const Ads = styled.div`
  .adsWrapper-mobile {
    display: none;
  }
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

  .adsWrapper {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    margin-top: 70px;
  }

  .ads {
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 100%;
    height: 110px;
    border: 1px solid #d9d9d9;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .adsWrapper-mobile {
      display: block;
    }
    .adsWrapper {
      display: none;
    }
    .adsHead {
      /* display: flex;
      justify-content: center;
      align-items: center; */
      p {
        font-size: 28px;
        font-weight: 700;
        color: #454545;
        margin-top: 60px;
      }
      div {
        display: none;
      }
    }
    .ads {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 310px;
      height: 110px;
      border: 1px solid #d9d9d9;
      text-align: center;
      margin-top: 30px;
    }
    .ads img {
      max-width: 270px;
      max-height: 70px;
      object-fit: contain;
    }
    .swiper-pagination-bullet {
      background: #ccc;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: #000;
    }
    .adsWrapper-mobile .swiper {
      padding-bottom: 25px;
    }
  }
`; 

export const Blog = styled.div`
a{
  text-decoration: none;
  color: #454545;
}
  .blogFotoMobile {
    display: none;
  }
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
    width: 100%;
    .blogFotoDiv {
      width: 100%;
      /* height: 455px; */
      border-bottom: 0.5px solid gray;
      img {
        width: 100%;
        max-width: 420px;
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
  @media screen and (max-width: 768px) {
    .blogFoto {
      display: none;
    }
    .blogHead {
      p {
        font-size: 28px;
        font-weight: 700;
        color: #454545;
      }
      button {
        display: none;
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
    }
    .blogFotoMobile {
      display: block;
      width: 100%;
      /* grid-template-columns: auto auto auto;*/
      /* gap: 20px;  */
      margin-top: 50px;
      .blogFotoDiv {
        width: 100%;
        height: 455px;
        border-bottom: 0.5px solid gray;
        padding: 5px;
        img {
          width: 100%;
          height: 300px;
          border-radius: 10px;
          object-fit: cover;
        }
        div {
          display: flex;
          justify-content: space-between;
          /* align-items: center; */
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
          margin-top: 14px;
          margin-bottom: 32px;
          color: #454545;
        }
      }
      .buttonDiv {
        button {
          font-size: 16px;
          font-weight: 500;
          color: #454545;
          width: 100%;
          height: 50px;
          border: 1px solid #454545;
          border-radius: 100px;
          margin-top: 75px;
          background-color: #ffffff;
        }
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
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 60px;
    margin-bottom: 35px;
    h3 {
      font-size: 28px;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      margin-top: 25px;
      font-weight: 500;
    }
  }
`;