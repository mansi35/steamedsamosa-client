/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Package.scss';

function Package(props) {
  return (
    <div className="pkg_component">
      <img src={props.image} alt="Wedding image" />
      <div className="text">
      <div className="left">
        <div className="main_heading">
          <h2>{props.name}</h2>
          <ReactStars
            size={30}
            value={props.rating}
            isHalf
            edit={false}
            activeColor="orange"
          />
        </div>
        <div className="tags">
            {props.customizable 
            && (
            <div className="tag">
              <p>Customizable ✏️</p> 
            </div>
            )}
            {props.premium 
            && (
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
     <div className="right">
            <div className="prices">
            <s>
            ₹{props.initPrice}
            </s>
            <p>
              ₹{props.discounted}
            </p>
            </div>
            <button type="button" className="bookbutton">Book Now</button>
     </div>
      </div>
    </div>
  );
}

export default Package;
