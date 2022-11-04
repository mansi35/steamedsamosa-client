import React from 'react';
import './ShoppingCart.scss';
import ProductCard from '../ProductCard/ProductCard';

function ShoppingCart() {
  return (
    <div className="shopping__cart">
      <p className="heading">Shopping Cart</p>
      <ProductCard
        type="not-package-card"
        name="Banquet Paradise"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3.5}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <ProductCard
        type="not-package-card"
        name="Banquet Paradise"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3.5}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
      <ProductCard
        type="not-package-card"
        name="Banquet Paradise"
        customizable
        premium
        desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
        rating={3.5}
        initPrice="31000"
        discounted="23000"
        image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
      />
    </div>
  );
}

export default ShoppingCart;
