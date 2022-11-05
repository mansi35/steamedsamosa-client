import React from 'react';
import './OrderSummary.scss';

function OrderSummary() {
  return (
    <div className="order__summary">
      <div>
        <p className="order__heading">Order Summary</p>
      </div>
      <div className="price__details">
        <div>
          <p>Cart Subtotal</p>
          <p>Taxes and Fees</p>
          <p>Booking Fees</p>
        </div>
        <div>
          <p>₹23,000</p>
          <p>₹500</p>
          <p>₹250</p>
        </div>
      </div>
      <div className="price__details">
        <div>Total Price</div>
        <div>₹23,750</div>
      </div>
      <div>
        <button type="button">
          <b>Checkout</b>
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
