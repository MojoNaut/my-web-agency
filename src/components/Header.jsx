import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Click fuori dal menu → chiude
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll deciso → chiude menu
  useEffect(() => {
    let scrollTimeout;
    const SCROLL_THRESHOLD = 50; // Pixel di scroll necessari per chiudere

    const handleScroll = () => {
      if (!menuOpen) return;

      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      // Chiudi solo se scroll > 50px
      if (scrollDifference > SCROLL_THRESHOLD) {
        // Delay di 200ms prima di chiudere
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          closeMenu();
        }, 50);
      }

      lastScrollY.current = currentScrollY;
    };

    if (menuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-content">
          
          {/* LOGO SVG (scorre con pagina) */}
          <div className="logo">
            <div className="logo-placeholder">
              <span className="logo-punto">punto</span>
              <span className="logo-vista">vista</span>
            </div>
          </div>

          {/* TAGLINE CENTRO (scorre con pagina) */}
          <div className="header-tagline">
            <p>Ogni brand merita il suo punto di vista</p>
          </div>

        </div>
      </div>

      {/* MENU BUTTON - FIXED */}
      <button 
        ref={buttonRef}
        className={`menu-button ${menuOpen ? 'menu-button-open' : ''}`}
        onClick={toggleMenu}
      >
        Menu
      </button>

      {/* MENU DROPDOWN - FIXED */}
      <nav 
        ref={menuRef}
        className={`nav-menu ${menuOpen ? 'menu-visible' : ''}`}
      >
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;