/* eslint-disable no-unused-vars */
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import './CustomerReviews.scss';
import CustomerReview from '../CustomerReview/CustomerReview';

function CustomerReviews() {
  return (
    <div className="customerreviews">
      <div className="customerreviews__desc">
        <p>Don’t just take our word for it.</p>
        <h1>Here’s what our customers say about us!</h1>
      </div>
      <div className="customerreviews__reviews">
        <Splide
          className="topoffers__carousel"
          options={{
            type: 'loop',
            focus: 'center',
            drag: 'free',
            perPage: 3,
            pagination: true,
          }}
        >
          {[...Array(10)].map((_) => (
            <SplideSlide>
              <CustomerReview />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default CustomerReviews;
