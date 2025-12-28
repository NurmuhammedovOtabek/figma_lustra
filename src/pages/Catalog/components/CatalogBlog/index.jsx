import React from 'react';
import { AdsBlog, BlogCatalog, CatalogBlogWapper, InfoCatalog } from './CatalogBlog.styled';
import { VektorLeft, VektorRight, VektorRightTop } from '../../../../components';
import { AlteP, bloghome1, bloghome2, bloghome3, dvinere, odeon_light } from '../../../../assets';
import { Link } from 'react-router-dom';
import { SwiperSlide ,Swiper} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

function CatalogBlog(props) {
    return (
      <CatalogBlogWapper>
        <AdsBlog>
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
                <img src={AlteP} alt="" />
              </div>
            </div>
            <div className="ads">
              <div>
                <img src={dvinere} alt="" />
                {/* <Dvinere /> */}
              </div>
            </div>
            <div className="ads">
              <div>
                <img src={odeon_light} alt="" />
              </div>
            </div>
            <div className="ads">
              <div>
                <img src={AlteP} alt="" />
              </div>
            </div>
          </div>
          
        </AdsBlog>
        <BlogCatalog>
          <div className="blogHead">
            <p>Блог</p>
            <div>
              <button>
                <Link to="/blog">
                  Перейти в блог
                  <VektorRight />
                </Link>
              </button>
            </div>
          </div>
          <div className="blogFoto">
            <div className="blogFotoDiv">
              <img src={bloghome1} alt="" />
              <div>
                <p>Как правильно освещать дом снаружи?</p>
                <VektorRightTop />
              </div>
              <p className="blogp">01.01.2024</p>
            </div>
            <div className="blogFotoDiv">
              <img src={bloghome2} alt="" />
              <div>
                <p>Как правильно освещать дом снаружи?</p>
                <VektorRightTop />
              </div>
              <p className="blogp">01.01.2024</p>
            </div>
            <div className="blogFotoDiv">
              <img src={bloghome3} alt="" />
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
                  <img src={bloghome1} alt="" />
                  <div>
                    <p>Как правильно освещать дом снаружи?</p>
                    <VektorRightTop />
                  </div>
                  <p className="blogp">01.01.2024</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blogFotoDiv">
                  <img src={bloghome2} alt="" />
                  <div>
                    <p>Как правильно освещать дом снаружи?</p>
                    <VektorRightTop />
                  </div>
                  <p className="blogp">01.01.2024</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blogFotoDiv">
                  <img src={bloghome3} alt="" />
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
                <Link to="/blog">
                  Перейти в блог
                  <VektorRight />
                </Link>
              </button>
            </div>
          </div>
        </BlogCatalog>
        <InfoCatalog>
          <h3>Производство светильников</h3>
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.Покупая светильники в нашем интернет-магазине, вы получаете
            отличное соотношение цены и качества. Мы осуществляем доставку по
            всей России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </InfoCatalog>
      </CatalogBlogWapper>
    );
}

export default CatalogBlog;