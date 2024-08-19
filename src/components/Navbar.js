import React, { useState } from 'react';
import './css/Navbar.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <a href="hero-section" onClick={() => scrollToSection('hero-section')}>Home</a>
        <a href="about-section" onClick={() => scrollToSection('about-section')}>About</a>
        <a href="features-section" onClick={() => scrollToSection('features-section')}>Services</a>
        <a href="contact-section" onClick={() => scrollToSection('contact-section')}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
