import React from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="LAJ Logo" className="logo" />
        </a>
        <span className="name">Lisa Jorgensen</span> 
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
