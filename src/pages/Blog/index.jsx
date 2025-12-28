import React from 'react';
import { VektorJustRight, VektorRight, VektorRightTop } from '../../components';
import Home1 from "../../assets/bloghome1.png";
import Home2 from '../../assets/bloghome2.png'
import Home3 from "../../assets/bloghome3.png";
import { BlogMainWrapper, BlogWrapper } from './Blog.styled';
import { Link } from 'react-router-dom';

function Blog(props) {
    return (
      <div className="container">
        <BlogMainWrapper>
          <p className="headP">
            <span>
              <Link to='/'>Главная</Link>
            </span>
            <VektorJustRight />
            Блог
          </p>
          <BlogWrapper>
            <div className="blogHead">
              <p>Блог</p>
            </div>
            <div className="blogFoto">
              <div className="blogFotoDiv">
                <img src={Home1} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
              <div className="blogFotoDiv">
                <img src={Home2} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
              <div className="blogFotoDiv">
                <img src={Home3} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
            </div>
          </BlogWrapper>
          <BlogWrapper>
                
            <div className="blogFoto">
              <div className="blogFotoDiv">
                <img src={Home1} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
              <div className="blogFotoDiv">
                <img src={Home2} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
              <div className="blogFotoDiv">
                <img src={Home3} alt="" />
                <div>
                  <p>Как правильно освещать дом снаружи?</p>
                  <VektorRightTop />
                </div>
                <p className="blogp">01.01.2024</p>
              </div>
            </div>
          </BlogWrapper>
        </BlogMainWrapper>
      </div>
    );
}

export default Blog;