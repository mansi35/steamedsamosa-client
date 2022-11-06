import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import PackagesList from './pages/PackagesList/PackagesList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import PackageDescription from './pages/PackageDescription/PackageDescription';
import Caterer from './pages/Caterer/Caterer';
import Florist from './pages/Florist/Florist';
import Cart from './pages/Cart/Cart';
import {
  getAccomodations, getBeauticians, getCaterers, getFlorists, getMusicOptions, getPhotographers, getVenues,
} from './actions/events';
import { getPackages } from './actions/packages';
import CatererList from './pages/CatererList/CatererList';
import MusicOptionsList from './pages/MusicOptionsList/MusicOptionsList';
import BeauticiansList from './pages/BeauticiansList/BeauticiansList';
import AccomodationsList from './pages/AccomodationsList/AccomodationsList';
import FloristList from './pages/FloristList/FloristList';
import PhotographersList from './pages/PhotographersList/PhotographersList';
import VenueList from './pages/VenueList/VenueList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPackages());
    dispatch(getCaterers());
    dispatch(getFlorists());
    dispatch(getVenues());
    dispatch(getMusicOptions());
    dispatch(getPhotographers());
    dispatch(getBeauticians());
    dispatch(getAccomodations());
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <Header />
          <CategoryHeader />
          <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/caterers" element={<CatererList />} />
            <Route exact path="/florists" element={<FloristList />} />
            <Route exact path="/music" element={<MusicOptionsList />} />
            <Route exact path="/photographers" element={<PhotographersList />} />
            <Route exact path="/venues" element={<VenueList />} />
            <Route exact path="/beauticians" element={<BeauticiansList />} />
            <Route exact path="/accomodations" element={<AccomodationsList />} />
            <Route exact path="/catering/:productid" element={<Caterer />} />
            <Route exact path="/florists/:productid" element={<Florist />} />
            <Route exact path="/music/:productid" element={<ProductDescription />} />
            <Route exact path="/photography/:productid" element={<ProductDescription />} />
            <Route exact path="/venues/:productid" element={<ProductDescription />} />
            <Route exact path="/makeup/:productid" element={<ProductDescription />} />
            <Route exact path="/accomodations/:productid" element={<ProductDescription />} />
            <Route exact path="/packages" element={<PackagesList />} />
            <Route exact path="/packages/:packageid" element={<PackageDescription />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
