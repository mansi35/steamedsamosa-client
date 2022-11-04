/* eslint-disable no-unused-vars */
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import PackagesList from '../../pages/PackagesList/PackagesList';
import ProductCard from '../ProductCard/ProductCard';
import './AddProductModal.scss';

function AddProductModal({ modalState, setModalState }) {
  return (
    <div className={modalState === 'open' ? 'addProductModal overlay' : 'addProductModal'}>
      <div className={`addProductModal__${modalState}`}>
        <div className="addProductModal__body">
          <div className="addProductModal__header">
            <h4>Change Venue</h4>
            <IconButton onClick={() => setModalState('close')}><Close /></IconButton>
          </div>
          <div className="addProductModal__productcardlist">
            {[...Array(5)].map((_) => (
              <ProductCard
                type="change-card"
                name="Banquet Paradise"
                customizable
                premium
                desc="Premium Catering (Veg + Non-Veg)$Surround Sound Music$Professional Beauticians$Photography Team"
                rating={3.5}
                initPrice="31000"
                discounted="23000"
                image="https://www.weddingsutra.com/images/wedding-images/blog-images/wedding-packages/wedding-packages-14.WEBP"
                setModalState={setModalState}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
