import React from 'react';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import TierBasedProducts from '../../components/TierBasedProducts/TierBasedProducts';
import './ProductDescription.scss';

function ProductDescription() {
  return (
    <div>
      {/* conditional rendering based on type of product */}
      <div className="product__desc">
        <div className="product__type">
          <TierBasedProducts />
        </div>
        <div className="product__price">
          <ProductPriceCard />
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
