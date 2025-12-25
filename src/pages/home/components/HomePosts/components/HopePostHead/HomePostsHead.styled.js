import styled from "styled-components";

export const HomePostsHeadS = styled.div`
  .mobile-content {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mobile-content{
      display: block;
    }
    .desctop-content{
      display: none;
    }
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #454545;
  }
  button {
    max-width: 220px;
    max-height: 50px;
    border: 1px solid #454545;
    border-radius: 100px;
    padding: 14px 45px;
    background-color: white;
  }

  .buttonSpan {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const CatalogPost = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin-top: 40px;
  .divCatalogPost {
    width: 420px;
    height: 250px;
    border-radius: 20px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
  }
  .divRighr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .span {
      font-size: 14px;
      font-weight: 500;
      color: #454545;
    }
    .h5 {
      font-size: 20px;
      font-weight: 500;
      color: #454545;
    }
  }
  .imgCatalog {
    width: 180px;
    height: 200px;
    object-fit: cover;
  }
`;

export const HomePostsHeadPhone = styled.div`
  .phoneH3{
    font-size: 28px;
    font-weight: 700;
  }
`;
