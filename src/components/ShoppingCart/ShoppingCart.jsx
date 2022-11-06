import React from 'react';
import './ShoppingCart.scss';
import ProductCard from '../ProductCard/ProductCard';

function ShoppingCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  console.log(cartItems);
  return (
    <div className="shopping__cart">
      <p className="heading">Shopping Cart</p>
      {cartItems.map((item) => (
        <ProductCard
          type="not-package-card"
          packageinfo={item}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;
