import React from 'react';
import './Categories.scss';
import wedding from '../../images/wedding.png';
import birthday from '../../images/birthday.png';
import anniversary from '../../images/anniversary.png';
import office from '../../images/office.png';
import baby from '../../images/baby.png';

function Categories() {
  return (
    <div className="categories">
      <div className="categories__row">
        <div className="category">
          <img src={wedding} alt="wedding" />
          <h2>Wedding</h2>
        </div>
        <div className="category">
          <img src={birthday} alt="birthday party" />
          <h2>Birthday Party</h2>
        </div>
      </div>
      <div className="categories__row">
        <div className="category">
          <img src={anniversary} alt="anniversary" />
          <h2>Anniversary</h2>
        </div>
        <div className="category">
          <img src={office} alt="corporate event" />
          <h2>Corporate Event</h2>
        </div>
        <div className="category">
          <h2>Baby Shower</h2>
          <img src={baby} alt="baby shower" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
