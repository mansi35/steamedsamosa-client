import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import './ProductPriceCard.scss';

function valuetext(value) {
  return `${value} guests`;
}

function ProductPriceCard() {
  const [numGuests, setNumGuests] = useState([0, 500]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const eventProfile = JSON.parse(localStorage.getItem('eventDetails'));

  const handleChange = (event, newValue) => {
    setNumGuests(newValue);
  };

  const onStartDateChanged = (event) => {
    setStartDate(event.value);
  };

  const onEndDateChanged = (event) => {
    setEndDate(event.value);
  };

  return (
    <div className="pricecard">
      <div className="pricecard__pricedesc">
        <div className="pricecard__price">
          <s>{eventProfile.basicPrice}</s>
          <h2>{eventProfile.basicPrice - (eventProfile.discount / 100) * eventProfile.basicPrice}</h2>
          <p>excluding applicable taxes</p>
        </div>
        <div className="pricecard__discount">
          <b>{eventProfile.discount}</b>
        </div>
      </div>
      <div className="pricecard_guests">
        <p>
          Number of Guests: (
          {numGuests[0]}
          {' '}
          -
          {' '}
          {numGuests[1]}
          )
        </p>
        <Slider
          getAriaLabel={() => 'Number of Guests'}
          value={numGuests}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={2000}
        />
      </div>
      <div className="pricecard__dates">
        <DatePickerComponent
          format="dd MMMM"
          id="startTime"
          data-name="startDate"
          value={startDate}
          className="e-field"
          change={onStartDateChanged}
          min={new Date()}
          cssClass="e-customStyle"
        />
        <b>&nbsp;-&nbsp;</b>
        <DatePickerComponent
          format="dd MMMM"
          id="startTime"
          data-name="endDate"
          value={endDate}
          className="e-field"
          change={onEndDateChanged}
          min={new Date()}
          cssClass="e-customStyle"
        />
      </div>
      <button
        style={{ cursor: 'pointer' }}
        type="button"
        onClick={() => {
          const existing = JSON.parse(localStorage.getItem('cartItems'));
          if (existing === null) {
            localStorage.setItem('cartItems', JSON.stringify(eventProfile));
          } else if (Array.isArray(existing)) {
            const updated = [...existing, eventProfile];
            localStorage.setItem('cartItems', JSON.stringify(updated));
            // existing.append(eventProfile);
          } else {
            const updated = [existing, eventProfile];
            localStorage.setItem('cartItems', JSON.stringify(updated));
          }
        }}
      >
        <b>Add To Cart</b>

      </button>
    </div>
  );
}

export default ProductPriceCard;
