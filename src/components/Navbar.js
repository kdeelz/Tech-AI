import React, { useState } from 'react';
import './css/Navbar.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Tech AI</a>
      
      <i
        className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={toggleMenu}
      ></i>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      
    </header>
  );
};

export default Navbar;
