import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './ProductCard.scss';

function ProductCard({
  key, type, packageinfo, setModalState,
}) {
  const [discountPrice, setDiscountPrice] = useState(packageinfo.basicPrice);
  const [averageRating, setAverageRating] = useState(0);

  function setDiscountedPrice() {
    const price = packageinfo.basicPrice;
    const { discount } = packageinfo;
    setDiscountPrice(Math.max((discount / 100) * price, price - packageinfo.maxDiscountValue));
  }

  function setAveragedRating() {
    let numberOfRatings = 0;
    packageinfo.customer_reviews.forEach((review) => {
      setAverageRating(averageRating + review.rating);
      numberOfRatings += 1;
    });
    setAverageRating(averageRating / numberOfRatings);
  }

  useEffect(() => {
    setDiscountedPrice();
    setAveragedRating();
  });

  return (
    <div className="pkg_component" key={key}>
      <div className="left">
        <img src={packageinfo.images[0].url} alt="Wedding" className={type === 'change-card' && 'productCard__change'} />
        <div className="text">
          <div className="productCard__heading">
            <h2>{packageinfo.name}</h2>
            {packageinfo.isPremium && type === 'package-card' && (
              <div className="tag">
                <p>Premium ✨</p>
              </div>
            )}
          </div>
          <div className="tags">
            {packageinfo.isCustomizable && type === 'list-card' && (
              <div className="tag">
                <p>
                  Customizable ✏️
                </p>
              </div>
            )}
            {type === 'package-card' && (
              <button className="tag" type="button" onClick={() => setModalState('open')}>
                <p>
                  Customize
                </p>
              </button>
            )}
            {packageinfo.isPremium && type === 'list-card' && (
              <div className="tag">
                <p>Premium ✨</p>
              </div>
            )}
          </div>
          <div className="description">
            <ul>
              {packageinfo.basicDescription.split('$').map((val) => (
                <li>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="right" style={{ gap: type === 'change-card' ? '5px' : '35px' }}>
        {type === 'package-card' && (
          <div className="productCard__customizepackage">
            <button type="button" className="productCard__editbtn" onClick={() => setModalState('open')}>
              Change
            </button>
            <button type="button" className="productCard__editbtn">
              Remove
            </button>
          </div>
        )}
        {type === 'change-card' && (
          <div className="productCard__customizepackage">
            <button type="button" className="productCard__editbtn">
              Add
            </button>
          </div>
        )}
        <div className="productCard__ratingPrice">
          <Rating
            name="half-rating-read"
            value={averageRating}
            size="large"
            precision={0.5}
            readOnly
          />
          <div className="prices">
            <s>
              ₹
              {packageinfo.basicPrice}
            </s>
            <p>
              ₹
              {' '}
              {discountPrice}
            </p>
          </div>
        </div>
        {type === 'list-card' && (
          <button type="button" className="bookbutton">
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
