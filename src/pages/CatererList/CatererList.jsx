import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function CatererList() {
  const { caterers } = useSelector((state) => state.caterers);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {caterers?.map((caterer, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={caterer}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default CatererList;
