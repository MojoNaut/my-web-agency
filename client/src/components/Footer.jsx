// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Header grande */}
        <div className="footer-header">
          <h2 className="footer-brand">
            <span className="footer-brand-punto">punto</span>
            <span className="footer-brand-vista">vista</span>
          </h2>
        </div>

        {/* 3 Colonne */}
        <div className="footer-content">
          {/* Colonna 1 - Navigation */}
          <nav className="footer-nav">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#section-process">Perché noi</a></li>
              <li><a href="#services-section">Servizi</a></li>
              <li><a href="#portfolio-section">Work</a></li>
              <li><a href="#contact-section">Contatti</a></li>
            </ul>
          </nav>

          {/* Colonna 2 - Social */}
          <nav className="footer-social">
            <ul>
              <li><a href="https://instagram.com/puntovista" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://vimeo.com/puntovista" target="_blank" rel="noopener noreferrer">Vimeo</a></li>
              <li><a href="https://youtube.com/@puntovista" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://linkedin.com/company/puntovista" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </nav>

          {/* Colonna 3 - Info */}
          <div className="footer-info">
            <p>Puntovista Studio</p>
            <p>Via Esempio 123,</p>
            <p>30100 Venezia, Italia</p>
            <p className="footer-email">
              <a href="mailto:info@puntovista.com">info@puntovista.com</a>
            </p>
            <p className="footer-phone">
              <a href="tel:+39041234567">(+39) 041 234 567</a>
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">©{new Date().getFullYear()}</p>
          <span className="footer-dot">·</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;