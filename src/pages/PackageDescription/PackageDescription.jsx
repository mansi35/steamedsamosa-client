/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ImagesBanner from '../../components/ImagesBanner/ImagesBanner';
import ProductPriceCard from '../../components/ProductPriceCard/ProductPriceCard';
import './PackageDescription.scss';
import AddProductModal from '../../components/AddProductModal/AddProductModal';
import ProductCard from '../../components/ProductCard/ProductCard';

function Package() {
  const [modalState, setModalState] = useState('close');
  const eventProfile = JSON.parse(localStorage.getItem('eventDetails'));
  return (
    <div className="package">
      <AddProductModal modalState={modalState} setModalState={setModalState} />
      <ImagesBanner />
      <div className="package__desc">
        <div className="package__cardlist">
          {eventProfile.events.map((event, i) => (
            <ProductCard
              key={i}
              type="package-card"
              packageinfo={event}
              setModalState={setModalState}
            />
          ))}
        </div>
        <div className="package__order">
          <ProductPriceCard />
        </div>
      </div>
    </div>
  );
}

export default Package;
