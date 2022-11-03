import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <Header />
          <CategoryHeader />
          <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/caterer" element={<Caterer />} />
            <Route exact path="/florist" element={<Florist />} />
            <Route exact path="/product" element={<ProductDescription />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/packagelist" element={<PackagesList />} />
            <Route exact path="/package" element={<PackageDescription />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
