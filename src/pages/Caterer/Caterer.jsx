/* eslint-disable no-unused-vars */
import React from 'react';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import MenuType from '../../components/MenuType/MenuType';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './Caterer.scss';

function Caterer() {
  return (
    <div className="caterarpage">
      <ImagesBanner />
      <div className="catererpage__desc">
        <div className="catererpage__menu">
          {[...Array(5)].map((_) => (
            <MenuType />
          ))}
        </div>
        <div className="catererpage__order">
          <ProductPriceCard />
          <i>Note: Adding additional items will increase the total price.</i>
        </div>
      </div>
    </div>
  );
}

export default Caterer;
