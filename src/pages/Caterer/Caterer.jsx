/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import MenuType from '../../components/MenuType/MenuType';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './Caterer.scss';

function Caterer() {
  const eventProfile = JSON.parse(localStorage.getItem('eventDetails'));
  const [starters, setStarters] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    eventProfile.menus.forEach((dish) => {
      if (dish.category === 'main_course') { setMainCourse((oldArray) => [...oldArray, dish]); } else if (dish.category === 'starters') { setStarters((oldArray) => [...oldArray, dish]); } else {
        setDesserts((oldArray) => [...oldArray, dish]);
      }
    });
  }, []);

  return (
    <div className="caterarpage">
      <ImagesBanner />
      <div className="catererpage__desc">
        <div className="catererpage__menu">
          <MenuType type="Starters" dishes={starters} />
          <MenuType type="Main Course" dishes={mainCourse} />
          <MenuType type="Desserts" dishes={desserts} />
        </div>
        <div className="catererpage__order">
          <ProductPriceCard />
          <i>Note: Adding additional items will increase the total price.</i>
        </div>
      </div>
    </div>
  );
}

export default Caterer;
