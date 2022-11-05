import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function VenueList() {
  const { venues } = useSelector((state) => state.venues);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {venues?.map((venue, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={venue}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default VenueList;
