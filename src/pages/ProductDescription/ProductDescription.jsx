import React from 'react';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import TierBasedProducts from '../../components/TierBasedProducts/TierBasedProducts';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import './ProductDescription.scss';
import MenuType from '../../components/MenuType/MenuType';
import FloristExtrasCard from '../../components/FloristExtrasCard/FloristExtrasCard';

function ProductDescription() {
  const productProfile = JSON.parse(localStorage.getItem('productDetails'));
  return (
    <div>
      <ImagesBanner />
      <div className="product__desc">
        <div className="product__type">
          {productProfile.type === 'tier-based' && (
            <TierBasedProducts product={productProfile} />
          )}
          {productProfile.type === 'catering' && (
            <MenuType product={productProfile} />
          )}
        </div>
        <div className="product__price">
          <ProductPriceCard />
          {productProfile.type === 'catering' && (
            <i>Note: Adding additional items will increase the total price.</i>
          )}
          {productProfile.type === 'florist' && (
            <>
              <br />
              <b>Basic Plan</b>
              <i>Up to 2000 flowers included</i>
              <b>Standard Plan</b>
              <i>Up to 5000 flowers included</i>
              <b>Premium Plan</b>
              <i>Up to 10,000 flowers included</i>
              <FloristExtrasCard />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
