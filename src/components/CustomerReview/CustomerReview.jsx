/* eslint-disable max-len */
import React from 'react';
import feedback from '../../images/feedback.png';
import './CustomerReview.scss';

function CustomerReview() {
  return (
    <div className="customerreview">
      <img src={feedback} alt="feedback" />
      <p>The one stop solution to your event management woes. Together we spread love and positivity.</p>
    </div>
  );
}

export default CustomerReview;
