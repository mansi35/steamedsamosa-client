import React from 'react';
import './CartProgressBar.scss';

function CartProgressBar() {
  return (
    <div>
      <div className="container">
        <ul className="progressbar">
          <li className="active">Customer Information</li>
          <li>Payment Information</li>
          <li>Order Confirmed</li>
        </ul>
      </div>
    </div>
  );
}

export default CartProgressBar;
