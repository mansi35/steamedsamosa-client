/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './MenuType.scss';

function MenuType({ type, dishes }) {
  console.log(dishes);
  return (
    <div className="menuType">
      <h4>{type}</h4>
      <div className="menuType__items">
        {dishes.map((i) => (
          <div className="menuType__item">
            <input type="checkbox" name={`menuItem${i.dishName}`} id={`menuItem${i.dishName}`} value="Menu Item" />
            <label htmlFor={`menuItem${i}`}>{i.dishName}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuType;
