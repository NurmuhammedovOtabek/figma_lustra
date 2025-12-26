import React from "react";
import { VektorRight } from "../../../../../../components";
import {
  CatalogPost,
  HeadWrapper,
  HomePostsHeadPhone,
  HomePostsHeadS,
} from "./HomePostsHead.styled";
import lustra from "../../../../../../assets/lustra.png";

function HomePostsHead(props) {
  return (
    <HomePostsHeadS>
      <div className="desctop-content">
        <HeadWrapper>
          <h3>Каталог</h3>
          <button>
            <span className="buttonSpan">
              Весь каталог <VektorRight />
            </span>
          </button>
        </HeadWrapper>
        <CatalogPost>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
        </CatalogPost>
      </div>
      <div className="mobile-content">
        <HomePostsHeadPhone>
          <div className="headDiv">
            <h3 className="phoneH3">Каталог</h3>
          </div>
          <div className="card">
            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Люстры</h5>
                <div clssName="imgDiv">
                  <img src={lustra} alt="" className="imgCatalog" />
                </div>
                <p className="span">
                  От 540₽    <VektorRight />
                </p>
              </div>
              <div></div>
            </div>
            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Люстры</h5>
                <div clssName="imgDiv">
                  <img src={lustra} alt="" className="imgCatalog" />
                </div>
                <p className="span">
                  От 540₽ <VektorRight />
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="butWrapper">
            <button>
              <span className="buttonSpan">
                Весь каталог <VektorRight />
              </span>
            </button>
          </div>
        </HomePostsHeadPhone>
      </div>
    </HomePostsHeadS>
  );
}

export default HomePostsHead;
