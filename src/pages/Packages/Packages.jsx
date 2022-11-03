import React from 'react';
import Package from '../../components/Package/Package';
import Filter from '../../components/Filter/Filter';
import './Packages.scss';

function Packages() {
  return (
    <div className="packages">
      <Filter />
      <Package
        name="Dhamaka Wedding Package"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3.5}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <Package
        name="Dhamaka Wedding Package"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <Package
        name="Dhamaka Wedding Package"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <Package
        name="Dhamaka Wedding Package"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default Packages;
