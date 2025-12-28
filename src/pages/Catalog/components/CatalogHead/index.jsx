import React from 'react';
import { CatalogBlogWrapper } from './CatalogBlog.styled';
import { Link } from 'react-router-dom';
import { VektorJustRight, VektorRight } from '../../../../components/icons';
import { bra, complect, lenta, lustra, spoti, stolniyLamp, svetliniki, texnichiskiy, torsheriki, trekovyi, ulichniy } from '../../../../assets';

function CatalogHead(props) {
    return (
      <CatalogBlogWrapper>
        <div className="catalogHead">
          <p>Светильники</p>
          <p>Люстры</p>
          <p>Настольные лампы</p>
          <p>Ночники</p>
          <p>Подсветка</p>
          <p>Уличное освещение</p>
          <p>Мебельные установки</p>
        </div>
        <div className="productHead">
          <Link to="/">
            <span>Главная</span>
          </Link>
          <VektorJustRight />
          <p>Каталог</p>
        </div>
        <h1 className="headH1">Каталог</h1>
        <div className="cardWrapper">
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Люстры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lustra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Светильники</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={svetliniki} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Бра</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={bra} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Торшеры</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={torsheriki} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Настольные лампы</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={stolniyLamp} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Споты</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={spoti} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Трековые светильники</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={trekovyi} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Уличные светильники</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={ulichniy} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost">
            <div className="divRighr">
              <h5 className="h5">Технические светильники</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={texnichiskiy} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost last1back">
            <div className="divRighr">
              <h5 className="h5">Светодиодные ленты</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={lenta} alt="" className="imgCatalog" />
            </div>
          </div>
          <div className="divCatalogPost last">
            <div className="divRighr">
              <h5 className="h5">Комплектуюшие</h5>
              <span className="span">
                От 540₽ <VektorRight />
              </span>
            </div>
            <div>
              <img src={complect} alt="" className="imgCatalog" />
            </div>
          </div>
        </div>
        <div className="mobile">
            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Люстры</h5>
                <div>
                  <img src={lustra} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Светильники</h5>
                <div>
                  <img src={svetliniki} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Бра</h5>
                <div>
                  <img src={bra} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Торшеры</h5>
                <div>
                  <img src={torsheriki} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Настольные лампы</h5>
                <div>
                  <img src={stolniyLamp} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Споты</h5>
                <div>
                  <img src={spoti} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Трековые светильники</h5>
                <div>
                  <img src={trekovyi} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Уличные светильники</h5>
                <div>
                  <img src={ulichniy} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost">
              <div className="divRighr">
                <h5 className="h5">Технические</h5>
                <div>
                  <img src={texnichiskiy} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost last1back">
              <div className="divRighr">
                <h5 className="h5">Светодиодные ленты</h5>
                <div>
                  <img src={lenta} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>

            <div className="divCatalogPost last">
              <div className="divRighr">
                <h5 className="h5">Комплектуюшие</h5>
                <div>
                  <img src={complect} alt="" className="imgCatalog" />
                </div>
                <span className="span">
                  От 540₽ <VektorRight />
                </span>
              </div>
            </div>
        </div>
      </CatalogBlogWrapper>
    );
}

export default CatalogHead;