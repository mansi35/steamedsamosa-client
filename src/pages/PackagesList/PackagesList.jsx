import React from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import './PackagesList.scss';
import PackageCard from '../../components/PackageCard/PackageCard';

function PackagesList() {
  const { packages } = useSelector((state) => state.packages);

  return (
    <div className="packageslist">
      <Filter />
      <div className="packagelist__cards">
        {packages?.map((packageinfo, i) => (
          <PackageCard
            key={i}
            type="list-card"
            packageinfo={packageinfo}
          />
        ))}
      </div>
      <button type="button" className="loadMoreButton">Load More</button>
    </div>
  );
}

export default PackagesList;
