/* eslint-disable no-unused-vars */
import React from 'react';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import './PackageDescription.scss';

function Package() {
  return (
    <div className="package">
      <ImagesBanner />
      <div className="package__desc">
        <div className="package__cardlist">
          {[...Array(5)].map((_) => (
            <ProductCard
              type="package-card"
              name="Banquet Paradise"
              customizable
              premium
              desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
              rating={3.5}
              initPrice="31000"
              discounted="23000"
              image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
            />
          ))}
        </div>
        <div className="package__order">
          <ProductPriceCard />
        </div>
      </div>
    </div>
  );
}

export default Package;
