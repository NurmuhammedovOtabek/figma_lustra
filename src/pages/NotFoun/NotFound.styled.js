import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-top: 125px;
  margin-bottom: 170px;
  p {
    font-size: 24px;
    font-weight: 600;
  }
  button {
    width: 215px;
    height: 50px;
    border-radius: 100px;
    background-color: #454545;
    a {
      text-decoration: none;
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 70px;
    gap: 0;
    .wrapperImg {
      width: 320px;
      height: 190px;
      object-fit: contain;
      img {
        width: 100%;
      }
    }
    p {
      font-size: 16px;
    }
    button {
      width: 330px;
      margin-top: 60px;
    }
  }
`;