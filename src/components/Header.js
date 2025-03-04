import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="Header-logo">
        <img src='images/chennaikraja-logo.png' alt="Ganesh" className="Ganesh-img" />
      </div>
      <nav className="Header-nav">
        <a href="#about-us" className="Nav-link">About Us</a>
        <a href="#images" className="Nav-link">Images</a>
        <a href="#contact" className="Nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
