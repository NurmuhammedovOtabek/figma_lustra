import styled from "styled-components";

export const MainSlider = styled.div`
  display: flex;
  /* align-items: flex-start; */
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
    /* margin-top: 5px;  */
    /* align-self: flex-start;  */
  }
`;

