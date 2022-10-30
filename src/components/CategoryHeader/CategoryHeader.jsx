import React from 'react';
import './CategoryHeader.scss';
import packages from '../../images/Packages.png';
import florist from '../../images/Florist.png';
import photography from '../../images/Photography.png';
import music from '../../images/Music.png';
import food from '../../images/Food.png';
import venue from '../../images/Venue.png';
import beautician from '../../images/Beautician.png';
import accomodation from '../../images/Accomodation.png';

function CategoryHeader() {
  return (
    <div className="categoryheader">
      <div className="categoryheader__category">
        <img src={packages} alt="complete packages" />
        <p>Packages</p>
      </div>
      <div className="categoryheader__category">
        <img src={florist} alt="floral decorations" />
        <p>Florist</p>
      </div>
      <div className="categoryheader__category">
        <img src={music} alt="DJ and Band" />
        <p>Music</p>
      </div>
      <div className="categoryheader__category">
        <img src={food} alt="Food" />
        <p>Food</p>
      </div>
      <div className="categoryheader__category">
        <img src={venue} alt="Venue" />
        <p>Venue</p>
      </div>
      <div className="categoryheader__category">
        <img src={beautician} alt="Makeup packages" />
        <p>Beauticians</p>
      </div>
      <div className="categoryheader__category">
        <img src={accomodation} alt="Accomodation" />
        <p>Accomodation</p>
      </div>
      <div className="categoryheader__category">
        <img src={photography} alt="photography packages" />
        <p>Photography</p>
      </div>
    </div>
  );
}

export default CategoryHeader;
