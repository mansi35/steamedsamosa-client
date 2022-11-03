import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Filter from '../../components/Filter/Filter';
import './PackagesList.scss';

function PackagesList() {
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        <ProductCard
          type="list-card"
          name="Dhamaka Wedding Package"
          customizable
          premium
          desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
          rating={3.5}
          initPrice="31000"
          discounted="23000"
          image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
        />
        <ProductCard
          type="list-card"
          name="Dhamaka Wedding Package"
          customizable
          premium
          desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
          rating={3}
          initPrice="31000"
          discounted="23000"
          image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
        />
        <ProductCard
          type="list-card"
          name="Dhamaka Wedding Package"
          customizable
          premium
          desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
          rating={3}
          initPrice="31000"
          discounted="23000"
          image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
        />
        <ProductCard
          type="list-card"
          name="Dhamaka Wedding Package"
          customizable
          premium
          desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
          rating={3}
          initPrice="31000"
          discounted="23000"
          image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
        />
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default PackagesList;
