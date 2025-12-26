import React from 'react';
import {AboutBlogWrapper, Ads, Blog} from './AbourBlog.styled'
import {
  Arte,
  VektorLeft,
  VektorRight,
  VektorRightTop,
} from "../../../../components";
import Odeon from "../../../../assets/odeon_light.svg";
import Dviner from "../../../../assets/dvinere.svg";
import Home1 from "../../../../assets/bloghome1.png";
import Home2 from "../../../../assets/bloghome2.png";
import Home3 from "../../../../assets/bloghome3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import AlteP from "../../../../assets/AlteP.svg";

function AboutBlog(props) {
    return (
      <AboutBlogWrapper>
        <Ads>
          <div className="adsHead">
            <p>Только проверенные бренды</p>
            <div>
              <button>
                <VektorLeft />
              </button>
              <button>
                <VektorRight />
              </button>
            </div>
          </div>
          <div className="adsWrapper">
            <div className="ads">
              <div>
                <Arte />
              </div>
            </div>
            <div className="ads">
              <div>
                <img src={Dviner} alt="" />
                {/* <Dvinere /> */}
              </div>
            </div>
            <div className="ads">
              <div>
                <img src={Odeon} alt="" />
              </div>
            </div>
            <div className="ads">
              <div>
                <Arte />
              </div>
            </div>
          </div>
          <div className="adsWrapper-mobile">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1.1}
              spaceBetween={12}
              centeredSlides={false}
            >
              <SwiperSlide>
                <div className="ads">
                  <img src={AlteP} alt="Dviner" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="ads">
                  <img src={Dviner} alt="Dviner" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="ads">
                  <img src={Odeon} alt="Odeon" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ads">
                  <img src={AlteP} alt="Dviner" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Ads>
        <Blog>
          <div className="blogHead">
            <p>Блог</p>
            <div>
              <button>
                Перейти в блог
                <VektorRight />
              </button>
            </div>
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
          <div className="blogFotoMobile">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{ clickable: true }}
              className="bloghome"
            >
              <SwiperSlide>
                <div className="blogFotoDiv">
                  <img src={Home1} alt="" />
                  <div>
                    <p>Как правильно освещать дом снаружи?</p>
                    <VektorRightTop />
                  </div>
                  <p className="blogp">01.01.2024</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blogFotoDiv">
                  <img src={Home2} alt="" />
                  <div>
                    <p>Как правильно освещать дом снаружи?</p>
                    <VektorRightTop />
                  </div>
                  <p className="blogp">01.01.2024</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blogFotoDiv">
                  <img src={Home3} alt="" />
                  <div>
                    <p>Как правильно освещать дом снаружи?</p>
                    <VektorRightTop />
                  </div>
                  <p className="blogp">01.01.2024</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="buttonDiv">
              <button>
                Перейти в блог <VektorRight />
              </button>
            </div>
          </div>
        </Blog>
      </AboutBlogWrapper>
    );
}

export default AboutBlog;