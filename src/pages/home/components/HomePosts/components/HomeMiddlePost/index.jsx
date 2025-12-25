import React from "react";
import { VektorRight, Label } from "../../../../../../components";
import {
  MiddlePost,
} from "./HomeMiddlePosts.styled";

function HomeMiddlePosts(props) {
  return (
    <div>
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
  );
}

export default HomeMiddlePosts;
