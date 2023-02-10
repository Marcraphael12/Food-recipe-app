import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './navigation';

import './header.scss';
import RecipeFinder from '../assets/RecipeFinder.png';

const Header = () => (
  <div className="Header">
    <NavLink className="logo" to="/"><img src={RecipeFinder} alt="App logo" /></NavLink>
    <div className="nav-form">
      <Navigation />
    </div>
  </div>
);

export default Header;
