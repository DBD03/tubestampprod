import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2><span className="navbar-logo-tube">Tube</span><span className="navbar-logo-stamp">Stamp</span></h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#features" className="navbar-link">Features</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Do More With Video</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
