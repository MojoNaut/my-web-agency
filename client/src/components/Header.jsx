// client/src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerEl = document.querySelector('.header');

    // stato iniziale HERO
    headerEl?.classList.add('hero-state');
    headerEl?.classList.remove('card-state');

    // listener per desktop scroll
    const mqDesktop = window.matchMedia('(min-width: 1200px)');
    const handleScroll = () => {
      if (!mqDesktop.matches) return; // mobile/tablet nessun motion header

      if (window.scrollY > 2) {
        headerEl?.classList.remove('hero-state');
        headerEl?.classList.add('card-state');
      } else {
        headerEl?.classList.add('hero-state');
        headerEl?.classList.remove('card-state');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <header className="header">
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
          menu
        </button>
      </div>
    </header>
  );
};

export default Header;
