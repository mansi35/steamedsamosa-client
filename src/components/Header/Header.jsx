import { Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="samosa logo" />
        <NavLink to="/"><p>sTEAMed SaMoSA</p></NavLink>
      </div>
      <div className="header__search">
        <input placeholder="What are you looking for..." />
        <Search />
      </div>
      <div className="header__profile">
        <Avatar />
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default Header;
