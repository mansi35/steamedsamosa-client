/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import './FloristExtrasCard.scss';

function FloristExtrasCard() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="extrascard">
      {[...Array(10)].map((i) => (
        <div className="extrascard__floweritem">
          <div className="extrascard__flowertype">
            <input type="checkbox" name={`flowertype${i}`} id={`flowertype${i}`} value="Flower Type" />
            <label htmlFor={`flowertype${i}`}>Flower</label>
          </div>
          <ButtonGroup className="extrascard__flowerincrement" size="small" aria-label="small outlined button group">
            <Button onClick={() => handleIncrement()}>+</Button>
            <input value={counter} />
            <Button disabled={counter === 0} onClick={() => handleDecrement()}>-</Button>
          </ButtonGroup>
          <p>Rs. 30/pc</p>
        </div>
      ))}
    </div>
  );
}

export default FloristExtrasCard;
