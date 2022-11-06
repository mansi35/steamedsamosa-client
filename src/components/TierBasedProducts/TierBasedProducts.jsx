/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './TierBasedProducts.scss';

function TierBasedProducts({ product }) {
  const [basicText, setBasicText] = useState(['']);
  const [standardText, setStandardText] = useState(['']);
  const [premiumText, setPremiumText] = useState(['']);
  const [text, setText] = useState(['']);
  const [knownState, setKnownState] = useState(false);
  const [num, setNum] = useState(1);
  const [basicPrice, setBasicPrice] = useState(0);
  const [standardPrice, setStandardPrice] = useState(0);
  const [premiumPrice, setPremiumPrice] = useState(0);
  const [price, setPrice] = useState(0);

  const handleBasicClick = () => {
    setText(basicText);
    setKnownState(true);
    setNum(1);
    setPrice(basicPrice);
  };
  const handleStandardClick = () => {
    setText(standardText);
    setKnownState(true);
    setNum(2);
    setPrice(standardPrice);
  };
  const handlePremiumClick = () => {
    setText(premiumText);
    setKnownState(true);
    setNum(3);
    setPrice(premiumPrice);
  };

  useEffect(() => {
    setBasicText(product.basicDescription.split('$'));
    setStandardText(product.standardDescription.split('$'));
    setPremiumText(product.premiumDescription.split('$'));
    setBasicPrice(product.basicPrice);
    setStandardPrice(product.standardPrice);
    setPremiumPrice(product.premiumPrice);
    setPrice(product.basicPrice);
  }, []);

  return (
    <div className="tier__description">
      <div className="tier">
        <div className="tier__type basic" style={{ backgroundColor: num === 1 ? '#c1121f' : '#780000' }} onClick={handleBasicClick}>Basic</div>
        <div className="tier__type standard" style={{ backgroundColor: num === 2 ? '#c1121f' : '#780000' }} onClick={handleStandardClick}>Standard</div>
        <div className="tier__type premium" style={{ backgroundColor: num === 3 ? '#c1121f' : '#780000' }} onClick={handlePremiumClick}>Premium</div>
      </div>
      <div className="description">
        <div className="price__discount">
          <div className="price">
            <s className="original__price">{price}</s>
            <p className="new__price">23,000</p>
          </div>
          <div className="discount">20% off</div>
        </div>
        {knownState && (
          <ul>
            {text.map((txt) => <li>{txt}</li>)}
          </ul>
        )}
        {!knownState && (
          <ul>
            {basicText.map((txt) => <li>{txt}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TierBasedProducts;
