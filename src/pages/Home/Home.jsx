import React from 'react';
import Categories from '../../components/Categories/Categories';
import HomeReviews from '../../components/HomeReviews/HomeReviews';
import TopOffers from '../../components/TopOffers/TopOffers';

function Home() {
  return (
    <div>
      <TopOffers />
      <Categories />
      <HomeReviews />
    </div>
  );
}

export default Home;
