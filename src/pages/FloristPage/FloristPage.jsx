import React from 'react';
import FloristExtrasCard from '../../components/FloristExtrasCard/FloristExtrasCard';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './FloristPage.scss';

function FloristPage() {
  return (
    <div className="floristpage">
      <ImagesBanner />
      <div className="floristpage__desc">
        <div className="floristpage__menu">
          Florist Packages
        </div>
        <div className="floristpage__order">
          <ProductPriceCard />
          <br />
          <b>Basic Plan</b>
          <i>Up to 2000 flowers included</i>
          <b>Standard Plan</b>
          <i>Up to 5000 flowers included</i>
          <b>Premium Plan</b>
          <i>Up to 10,000 flowers included</i>
          <FloristExtrasCard />
        </div>
      </div>
    </div>
  );
}

export default FloristPage;
