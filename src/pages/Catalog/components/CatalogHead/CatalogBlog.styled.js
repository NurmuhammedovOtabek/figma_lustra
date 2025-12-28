import styled from "styled-components";

export const CatalogBlogWrapper = styled.div`
  .mobile {
    display: none;
  }
  .catalogHead {
    width: 100%;
    max-width: 1300px;
    height: 45px;
    background-color: #f2f2f2;
    border-radius: 100px;
    display: flex;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding: 10px 25px;
    p {
      font-size: 16px;
      font-weight: 600;
      color: #454545;
    }
  }
  .productHead {
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    margin-top: 50px;
    span {
      color: #888888;
    }
    a {
      text-decoration: none;
      color: #888888;
    }
  }
  .headH1 {
    font-size: 64px;
    font-weight: 700;
    margin-top: 15px;
  }
  .cardWrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    margin-top: 60px;
    .divCatalogPost {
      max-width: 420px;
      width: 100%;
      height: 250px;
      border-radius: 20px;
      background-color: #f2f2f2;
      display: flex;
      justify-content: space-between;
      padding: 20px 30px;
      grid-column: span 2;
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
      width: 100%;
      max-width: 180px;
      height: 200px;
      object-fit: contain;
    }
  }
  .cardWrapper .last {
    grid-column: span 3;
    max-width: 640px;
    width: 100%;
    .imgCatalog {
      width: 100%;
      max-width: 340px;
      height: 170px;
      object-fit: contain;
    }
  }
  .cardWrapper .last1back {
    grid-column: span 3;
    max-width: 640px;
    .imgCatalog {
      width: 100%;
      max-width: 340px;
      height: 170px;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    .catalogHead {
      display: none;
    }
    .headH1 {
      font-size: 28px;
      margin-top: 5px;
    }
    .cardWrapper {
      display: none;
    }
    .mobile {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      .divCatalogPost {
        width: 100%;
        min-width: 160px;
        height: 190px;
        border-radius: 20px;
        background-color: #f2f2f2;
        padding: 20px;
        grid-column: span 1;
      }
      .divRighr {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        .span {
          font-size: 14px;
          font-weight: 500;
          color: #454545;
        }
        .h5 {
          font-size: 16px;
          font-weight: 500;
          color: #454545;
        }
        .imgCatalog {
          width: 100%;
          max-width: 180px;
          height: 90px;
          object-fit: contain;
        }
      }
    }
    .mobile .last {
      grid-column: span 2;
      max-width: 640px;
      width: 100%;
      .imgCatalog {
        width: 100%;
        max-width: 340px;
        height: 90px;
        object-fit: contain;
      }
    }
  }
`;