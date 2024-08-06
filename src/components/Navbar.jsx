import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="typewriter-effect">
        {/* Typewriter effect content here */}
      </div>
    </nav>
  );
};

export default Navbar;