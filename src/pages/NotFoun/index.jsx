import React from 'react';
import { NotFoundWrapper } from './NotFound.styled';
import notFound from "../../assets/NotFound.svg"
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

function NotFound(props) {
    return (
      <div className="container">
        <Navbar/>
        <NotFoundWrapper>
          <div className="wrapperImg">
            <img src={notFound} alt="" />
          </div>
          <p>Похоже, ничего не нашлось :(</p>
          <button>
            
            <Link to="/">На главную</Link>
          </button>
        </NotFoundWrapper>
      </div>
    );
}

export default NotFound;