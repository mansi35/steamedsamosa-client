import React from 'react';
import ProfileDescription from '../../components/ProfileDescription/ProfileDescription';
import UpcomingBookings from '../../components/UpcomingBookings/UpcomingBookings';
import PastBookings from '../../components/PastBookings/PastBookings';

function Profile() {
  return (
    <div>
      <ProfileDescription />
      <UpcomingBookings />
      <PastBookings />
    </div>
  );
}

export default Profile;
