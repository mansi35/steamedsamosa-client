import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/packages">
          <img src={packages} alt="complete packages" />
          <p>Packages</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/florists">
          <img src={florist} alt="floral decorations" />
          <p>Florist</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/music">
          <img src={music} alt="DJ and Band" />
          <p>Music</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/caterers">
          <img src={food} alt="Food" />
          <p>Food</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/venues">
          <img src={venue} alt="Venue" />
          <p>Venue</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/beauticians">
          <img src={beautician} alt="Makeup packages" />
          <p>Beauticians</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/accomodations">
          <img src={accomodation} alt="Accomodation" />
          <p>Accomodation</p>
        </NavLink>
      </div>
      <div className="categoryheader__category">
        <NavLink to="/photographers">
          <img src={photography} alt="photography packages" />
          <p>Photography</p>
        </NavLink>
      </div>
    </div>
  );
}

export default CategoryHeader;
