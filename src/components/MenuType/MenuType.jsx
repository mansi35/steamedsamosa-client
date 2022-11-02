/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './MenuType.scss';

function MenuType() {
  return (
    <div className="menuType">
      <h4>Starters</h4>
      <div className="menuType__items">
        {[...Array(15)].map((i) => (
          <div className="menuType__item">
            <input type="checkbox" name={`menuItem${i}`} id={`menuItem${i}`} value="Menu Item" />
            <label htmlFor={`menuItem${i}`}>Menu Item</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuType;
