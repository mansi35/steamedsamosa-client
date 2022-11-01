import React from 'react';
import TierBasedProducts from '../../components/TierBasedProducts/TierBasedProducts';

function ProductDescription() {
  return (
    <div>
      {/* conditional rendering based on type of product */}
      <TierBasedProducts />
    </div>
  );
}

export default ProductDescription;
