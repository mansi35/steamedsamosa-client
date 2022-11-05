import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function FloristList() {
  const { florists } = useSelector((state) => state.florists);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {florists?.map((florist, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={florist}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default FloristList;
