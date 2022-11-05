import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function AccomodationsList() {
  const { accomodations } = useSelector((state) => state.accomodations);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {accomodations?.map((accomodation, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={accomodation}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default AccomodationsList;
