import React from "react";
import { VektorRight, Label } from "../../../../../../components";
import {
  MiddlePost,
  MiddlePostMobile,
  MiddlePostWrapper,
} from "./HomeMiddlePosts.styled";

function HomeMiddlePosts(props) {
  return (
    <MiddlePostWrapper>
      <div className="desctop">
        <MiddlePost>
          <div className="middleHead">
            <h3>Почему NORNLIGHT?</h3>
            <button>
              <span className="buttonSpan">
                О компании <VektorRight />
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
                <Label />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <Label />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <Label />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
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
                <Label width={25} height={25} />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <Label width={25} height={25} />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
            <div>
              <span>
                <Label width={25} height={25} />
              </span>
              <p className="p1">Только проверенные бренды</p>
              <p className="p2">Бренды, проверенные временем и качеством</p>
            </div>
          </div>
          <button>
            <span className="buttonSpan">
              О компании <VektorRight />
            </span>
          </button>
        </MiddlePostMobile>
      </div>
    </MiddlePostWrapper>
  );
}

export default HomeMiddlePosts;
