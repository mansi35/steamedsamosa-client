import { Rating } from '@mui/material';
import React from 'react';
import './ProductCard.scss';

function ProductCard(props) {
  return (
    <div className="pkg_component">
      <div className="left">
        <img src={props.image} alt="Wedding" />
        <div className="text">
          <div className="productCard__heading">
            <h2>{props.name}</h2>
            {props.premium && props.type === 'package-card' && (
              <div className="tag">
                <p>Premium ✨</p>
              </div>
            )}
          </div>
          <div className="tags">
            {props.customizable && props.type === 'list-card' && (
              <div className="tag">
                <p>
                  Customizable ✏️
                </p>
              </div>
            )}
            {props.type === 'package-card' && (
              <div className="tag">
                <p>
                  Customize
                </p>
              </div>
            )}
            {props.premium && props.type === 'list-card' && (
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
        {props.type === 'package-card' && (
          <div className="productCard__customizepackage">
            <button type="button" className="productCard__editbtn">
              Change
            </button>
            <button type="button" className="productCard__editbtn">
              Remove
            </button>
          </div>
        )}
        <div className="productCard__ratingPrice">
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
        </div>
        {props.type === 'list-card' && (
          <button type="button" className="bookbutton">
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
