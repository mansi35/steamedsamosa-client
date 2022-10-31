import React from 'react';
import './TopOffers.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import offer1 from '../../images/temp1.png';
import offer2 from '../../images/temp2.png';

function TopOffers() {
  return (
    <div className="topoffers">
      <Splide
        className="topoffers__carousel"
        options={{
          type: 'loop',
          focus: 'center',
          drag: 'free',
          perPage: 3,
          pagination: false,
          autoScroll: {
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <div className="topoffer__description">
            <img src={offer1} alt="1" />
            <h4>Dhamaka Wedding Offer: All in one package</h4>
            <div className="topoffer__details">
              <div className="topOffer__price">
                <s>₹33,858</s>
                <p>₹24,352</p>
              </div>
              <button type="button" className="topoffer__bookbutton">Book Now</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="topoffer__description">
            <img src={offer2} alt="2" />
            <h4>The Small Feet Package: Baby Shower Special</h4>
            <div className="topoffer__details">
              <div className="topOffer__price">
                <s>₹33,858</s>
                <p>₹24,352</p>
              </div>
              <button type="button" className="topoffer__bookbutton">Book Now</button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default TopOffers;
