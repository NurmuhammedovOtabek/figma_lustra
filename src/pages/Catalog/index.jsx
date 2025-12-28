import React from 'react';
import { CatalogWrapper } from './Catalog.styled';
import { VektorJustRight } from '../../components/icons';
import { Link } from 'react-router-dom';
import CatalogBlog from './components/CatalogBlog';
import CatalogHead from './components/CatalogHead';

function Catalog(props) {
    return (
      <div className="container">
        <CatalogWrapper>
          <CatalogHead/>
          <CatalogBlog/>
        </CatalogWrapper>
      </div>
    );
}

export default Catalog;