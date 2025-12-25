import styled from "styled-components";

export const MainSlider = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1710px;
  height: 500px;
  background-color: #f2f2f2;
  margin: 50px auto 95px auto;
  border-radius: 50px;
  .head {
    font-size: 64px;
    font-weight: 700;
    margin: 50px 200px 100px 200px;
  }
  span {
    background-color: #454545;
    width: fit-content;
    min-width: 495px;
    height: 85px;
    border-radius: 100px;
    padding: 4px 30px;
    color: #f2f2f2;
    font-size: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  img {
    margin-top: -51px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    max-width: 330px;
    height: 525px;
    padding: 25px 0 25px 0;
    border-radius: 30px;
    gap: 25px;
    align-items: center;
    .head {
      font-size: 28px;
      font-weight: 700;
      margin: 25px 43px 68px 16px;
    }
    span {
      min-width: 205px;
      height: 45px;
      padding: 7px 12px;
      color: #f2f2f2;
      font-size: 28px;
    }
    img {
      width: 100%;
      /* width: 300px; */
      max-height: 300px;
      object-fit: contain;
      margin-top: -45px;
      
      }
  }
`;

