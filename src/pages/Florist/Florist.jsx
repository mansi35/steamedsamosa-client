/* eslint-disable no-unused-vars */
import React from 'react';
import FloristExtrasCard from '../../components/FloristExtrasCard/FloristExtrasCard';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './Florist.scss';

function Florist() {
  return (
    <div className="floristpage">
      <ImagesBanner />
      <div className="floristpage__desc">
        <div className="floristpage__menu">
          {[...Array(80)].map((_) => (
            <p>Florist Packages</p>
          ))}
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

export default Florist;
