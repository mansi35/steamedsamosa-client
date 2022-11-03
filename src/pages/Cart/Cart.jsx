import React from 'react';
import Address from '../../components/Address/Address';
import CartProgressBar from '../../components/CartProgressBar/CartProgressBar';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

function Cart() {
  return (
    <div>
      <CartProgressBar />
      <Address />
      <OrderSummary />
      <ShoppingCart />
    </div>
  );
}

export default Cart;
