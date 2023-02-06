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
      <form>
        <input type="search" placeholder="search for an engredient eg: egg,beef" />
        <button type="submit">search</button>
      </form>
    </div>
  </div>
);

export default Header;
