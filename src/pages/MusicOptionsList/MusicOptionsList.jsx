import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import '../PackagesList/PackagesList.scss';

function MusicOptionsList() {
  const { musicOptions } = useSelector((state) => state.musicOptions);
  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {musicOptions?.map((music, i) => (
          <ProductCard
            key={i}
            type="list-card"
            packageinfo={music}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default MusicOptionsList;
