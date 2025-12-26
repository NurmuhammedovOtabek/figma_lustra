import React from "react";
import {HomeGoodsStyled} from "./HomePostsGoods.styled"
import Goods from "./descktop";
import Mobile from "./mobile";

function HomeGoods(props) {
  return (
    <HomeGoodsStyled>
      <div className="desctop">
        <Goods />
      </div>
      <div className="mobile">
        <Mobile />
      </div>
    </HomeGoodsStyled>
  );
}

export default HomeGoods;
