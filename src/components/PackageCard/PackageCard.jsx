import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PackageCard.scss';

function PackageCard({
  key, type, packageinfo, setModalState,
}) {
  const [discountPrice, setDiscountPrice] = useState(packageinfo.basicPrice);
  const [initPrice, setInitPrice] = useState();
  const [averageRating, setAverageRating] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let numberOfRatings = 0;
    let sumOfRatings = 0;
    let totalPrice = 0;
    let discountedPrice = 0;
    packageinfo.events.forEach((product) => {
      totalPrice += Number(product.basicPrice);
      discountedPrice += Number(product.basicPrice - (product.discount / 100) * product.basicPrice);
    });
    setInitPrice(totalPrice);
    setDiscountPrice(discountedPrice);
    packageinfo.customer_reviews.forEach((review) => {
      sumOfRatings += review.rating;
      numberOfRatings += 1;
    });
    setAverageRating(sumOfRatings / numberOfRatings);
  });

  return (
    <div className="pkg_component" key={key}>
      <div className="left">
        <img src={packageinfo.packageImage.url} alt="Wedding" className={type === 'change-card' && 'productCard__change'} />
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
              {packageinfo.description.split('$').map((val) => (
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
              {initPrice}
            </s>
            <p>
              ₹
              {' '}
              {discountPrice}
            </p>
          </div>
        </div>
        {type === 'list-card' && (
          <button
            type="button"
            className="bookbutton"
            onClick={() => {
              localStorage.setItem('eventDetails', JSON.stringify(packageinfo));
              navigate(`/packages/${packageinfo.id}`);
            }}
          >
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default PackageCard;
