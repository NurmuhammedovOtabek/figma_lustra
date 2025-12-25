import React from "react";
import HomePostsHead from "./components/HopePostHead";
import HomeMiddlePosts from "./components/HomeMiddlePost";
import HomeGoods from "./components/HomePostsGoods";

function HomePosts(props) {
  return (
    <div className="container">
      <HomePostsHead/>
      <HomeMiddlePosts/>
      <HomeGoods/>
    </div>
  );
}

export default HomePosts;
