import React from 'react';
import { MainSlider } from './HomeSlider.styled';
import lamp from "../../../../assets/lamp.png"

function HomeSlide(props) {
    return (
        <MainSlider>
          <h1 className="head">
            Скидка 15% на все подвесные светильники <span>до 5 февраля</span>
          </h1>
          <img src={lamp} alt="lamp" />
        </MainSlider>
    );
}

export default HomeSlide;