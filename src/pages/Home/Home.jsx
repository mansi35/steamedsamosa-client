import React from 'react';
import Categories from '../../components/Categories/Categories';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import TopOffers from '../../components/TopOffers/TopOffers';

function Home() {
  return (
    <div>
      <TopOffers />
      <Categories />
      <CustomerReviews />
    </div>
  );
}

export default Home;
