import React from 'react';
import babyshower from '../../images/babyshower.jpg';
import './PastBookings.scss';

function PastBookings() {
  return (
    <div>
      <div className="bookingheading">
        <div className="bookingheading__heading">
          <h3>Past Bookings</h3>
        </div>
      </div>
      <div className="bookingcard">
        <div className="bookingcard__column">
          <img className="bookingImg" src={babyshower} alt="generic_profile" />
        </div>
        <div className="bookingcard__column">
          <h4>Little Feet Baby Shower</h4>
          <p>
            8th March 2022
            {' '}
            <br />
            Contact Details: 123456789
            <br />
          </p>
          <br />
          <button type="button">Cancel Booking</button>
        </div>
      </div>
      <div className="loadMore">
        <button type="button">Load More</button>
      </div>
    </div>
  );
}

export default PastBookings;
