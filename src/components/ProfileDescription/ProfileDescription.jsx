import React from 'react';
import genericProfile from '../../images/generic_profile.jpeg';
import './ProfileDescription.scss';

function ProfileDescription() {
  return (
    <div>
      <div className="profileheader">
        <div className="profiletitle"><h3>Personal Details</h3></div>
      </div>
      <div className="profiledesc">
        <div className="profile__category">
          <img src={genericProfile} alt="generic_profile" />

        </div>
        <div className="profile__category">

          <h4>Neha Pandey</h4>
          <p>
            <span className="profileAttribute">Gender: </span>
            Female
            {' '}
            <br />
            <span className="profileAttribute">Email: </span>
            nehapandey@gmail.com
            {' '}
            <br />
            <span className="profileAttribute">Date of Birth: </span>
            24 October 1975
            {' '}
            <br />
            <span className="profileAttribute">Phone Number: </span>
            123456789
            {' '}
            <br />
            <span className="profileAttribute">Address: </span>
            Kashmere Gate, Delhi
            <br />
          </p>
        </div>
        <div className="profile__category"><button type="button" className="editProfileBtn">Edit Profile</button></div>
      </div>
    </div>
  );
}

export default ProfileDescription;
