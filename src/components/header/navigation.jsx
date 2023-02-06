import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navigation = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setHomeActive(true);
      setAboutActive(false);
    }
    if (path === '/about') {
      setHomeActive(false);
      setAboutActive(true);
    }
  }, [location]);
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="navlist">
          <NavLink className={homeActive ? 'activelink navlink' : 'navlink'} to="/"> Back to Home</NavLink>
        </li>
        <li className="navlist">
          <NavLink className={aboutActive ? 'activelink navlink' : 'navlink'} to="/about">More About This App</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
