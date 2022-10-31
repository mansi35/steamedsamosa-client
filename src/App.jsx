import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategoryHeader from './components/CategoryHeader/CategoryHeader';

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
            <Route exact path="/packagelist" element={<Packages />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
