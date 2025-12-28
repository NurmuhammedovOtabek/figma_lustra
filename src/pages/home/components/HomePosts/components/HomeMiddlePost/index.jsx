import React from "react";
import { VektorRight, Label, GrowPrice, Delivry, Assorti } from "../../../../../../components";
import {
  MiddlePost,
  MiddlePostMobile,
  MiddlePostWrapper,
} from "./HomeMiddlePosts.styled";
import { Link } from "react-router-dom";

function HomeMiddlePosts(props) {
  return (
    <MiddlePostWrapper>
      <div className="desctop">
        <MiddlePost>
          <div className="middleHead">
            <h3>Почему NORNLIGHT?</h3>
            <button>
              <span className="buttonSpan">
                <Link to="/about">
                  О компании <VektorRight />
                </Link>
              </span>
            </button>
          </div>
          <div className="middlePostDiv">
            <div>
              <span>
                <Label />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <GrowPrice />
              </span>
              <p className="p1">Самые низкие цены</p>
              <p className="p2">Ниже не будет нигде</p>
            </div>
            <div>
              <span>
                <Delivry />
              </span>
              <p className="p1">Быстрая доствка</p>
              <p className="p2">Доставляем по всей РФза 1-10 дней</p>
            </div>
            <div>
              <span>
                <Assorti />
              </span>
              <p className="p1">Большой ассортимент</p>
              <p className="p2">Более 1000 товаров</p>
            </div>
          </div>
        </MiddlePost>
      </div>
      <div className="mobile">
        <MiddlePostMobile>
          <div className="middleHead">
            <h3>Почему NORNLIGHT?</h3>
          </div>
          <div className="middlePostDiv">
            <div>
              <span>
                <Label width={25} height={25} />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <GrowPrice width={25} height={25} />
              </span>
              <p className="p1">Самые низкие цены</p>
              <p className="p2">Ниже не будет нигде</p>
            </div>
            <div>
              <span>
                <Delivry width={25} height={25} />
              </span>
              <p className="p1">Быстрая доствка</p>
              <p className="p2">Доставляем по всей РФза 1-10 дней</p>
            </div>
            <div>
              <span>
                <Assorti width={25} height={25} />
              </span>
              <p className="p1">Большой ассортимент</p>
              <p className="p2">Более 1000 товаров</p>
            </div>
          </div>
          <button>
            <span className="buttonSpan">
              <Link to="/about">
                О компании <VektorRight />
              </Link>
            </span>
          </button>
        </MiddlePostMobile>
      </div>
    </MiddlePostWrapper>
  );
}

export default HomeMiddlePosts;
