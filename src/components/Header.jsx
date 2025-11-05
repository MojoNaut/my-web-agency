import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="header-wrapper">
        <div className="logo">
          <span className="logo-punto">punto</span>
          <span className="logo-vista">vista</span>
        </div>

    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
  <ul>
    <li><a href="#process-section">Perché noi</a></li>
    <li><a href="#services-section">Servizi</a></li>
    <li><a href="#portfolio-section">Work</a></li>
    <li><a href="#contact-section">Contatti</a></li>
  </ul>
</nav>


        <button 
          className="burger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
