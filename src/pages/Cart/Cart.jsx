import React from 'react';
import Address from '../../components/Address/Address';
import CartProgressBar from '../../components/CartProgressBar/CartProgressBar';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart__container">
      <CartProgressBar />
      <div className="cart__address__order">
        <div className="big__item">
          <Address />
        </div>
        <div className="small__item">
          <OrderSummary />
        </div>
      </div>
      <div>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Cart;
