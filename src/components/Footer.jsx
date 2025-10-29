import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-punto">punto</span>
          <span className="logo-vista">vista</span>
        </div>
        <div className="footer-info">
          <p>Video production — Veneto</p>
          <p>📧 info@puntovista.studio</p>
          <p>📍 Veneto, Italia</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 PUNTOVISTA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;