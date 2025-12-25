import React from "react";
import { Ads, Blog, Info } from "./HomeBlog.styled";
import { Arte, Dvinere, VektorLeft, VektorRight, VektorRightTop } from "../../../../components";
import Odeon from "../../../../assets/odeon_light.svg"; 
import Dviner from "../../../../assets/dvinere.svg";
import Home1 from "../../../../assets/bloghome1.png"; 
import Home2 from "../../../../assets/bloghome2.png"; 
import Home3 from "../../../../assets/bloghome3.png"; 

function HomeBlog(props) {
  return (
    <div className="container">
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
      </Blog>
      <Info>
        <h3>Производство светильников</h3>
        <p>
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют.Покупая
          светильники в нашем интернет-магазине, вы получаете отличное
          соотношение цены и качества. Мы осуществляем доставку по всей России,
          чтобы каждый клиент мог насладиться прекрасным светом и удобством
          покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
          тепла и света с NORNLIGHT!
        </p>
      </Info>
    </div>
  );
}

export default HomeBlog;
