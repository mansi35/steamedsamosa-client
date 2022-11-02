import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';
import CatererPage from './pages/CatererPage/CatererPage';
import FloristPage from './pages/FloristPage/FloristPage';

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
            <Route exact path="/florist" element={<FloristPage />} />
            <Route exact path="/product" element={<ProductDescription />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
