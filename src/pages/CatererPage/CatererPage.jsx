import React from 'react';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './CatererPage.scss';

function CatererPage() {
  return (
    <div className="caterarpage">
      <ImagesBanner />
      <div className="catererpage__desc">
        <div className="catererpage__menu">
          Menu
        </div>
        <div className="catererpage__order">
          <ProductPriceCard />
        </div>
      </div>
    </div>
  );
}

export default CatererPage;
