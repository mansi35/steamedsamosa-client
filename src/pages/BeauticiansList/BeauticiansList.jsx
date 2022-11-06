import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function BeauticiansList() {
  const { beauticians } = useSelector((state) => state.beauticians);
  // console.log(beauticians[0]);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {beauticians?.map((beautician, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={beautician}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default BeauticiansList;
