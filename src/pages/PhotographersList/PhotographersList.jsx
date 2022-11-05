import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function PhotographersList() {
  const { photographers } = useSelector((state) => state.photographers);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {photographers?.map((photographer, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={photographer}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default PhotographersList;
