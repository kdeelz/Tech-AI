import React, { useState } from 'react';
import './css/Navbar.css'
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <a href="/" className="logo">Tech AI</a>
        <i
          className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
          id="menu-icon"
          onClick={toggleMenu}
        ></i>
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/learn">About</a>
          <a href="/services">Services</a>
          <a href="contact">Contact</a>
        </nav>
      </header>
      <div className={`nav-bg ${isActive ? 'active' : ''}`}></div>
    </>
  );
};

export default Navbar;