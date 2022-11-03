/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Rating from '@mui/material/rating';
import './Package.scss';

function Package(props) {
  return (
    <div className="pkg_component">
      <div className="left">
        <img src={props.image} alt="Wedding image" />
        <div className="text">
          <h2>{props.name}</h2>
          <div className="tags">
            {props.customizable && (
              <div className="tag">
                <p>Customizable ✏️</p>
              </div>
            )}
            {props.premium && (
              <div className="tag">
                <p>Premium ✨</p>
              </div>
            )}
          </div>
          <div className="description">
            <ul>
              {props.desc.split('$').map((val) => (
                <li>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <Rating
          name="half-rating-read"
          value={props.rating}
          size="large"
          precision={0.5}
          readOnly
        />
        <div className="prices">
          <s>
            ₹
            {props.initPrice}
          </s>
          <p>
            ₹
            {props.discounted}
          </p>
        </div>
        <button type="button" className="bookbutton">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Package;
