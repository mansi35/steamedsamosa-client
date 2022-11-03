import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import CatererPage from './pages/CatererPage/CatererPage';
import FloristPage from './pages/FloristPage/FloristPage';
import PackageDescription from './pages/PackageDescription/PackageDescription';

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
            <Route exact path="/caterer" element={<CatererPage />} />
            <Route exact path="/product" element={<ProductDescription />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/packagelist" element={<Packages />} />
            <Route exact path="/package" element={<PackageDescription />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
