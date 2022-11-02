import React from 'react';
import Package from '../../components/Package/Package';

function Packages() {
  return (
    <div>
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
    </div>
  );
}

export default Packages;
