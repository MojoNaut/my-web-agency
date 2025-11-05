// Home.jsx - SENZA Footer
import React from 'react';
import Background from './Background';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import StickySections from './StickySections';
import Portfolio from './Portfolio';
import { useSectionTitleAnimation } from '../hooks/useSectionTitleAnimation';
import './Home.css';

const Home = () => {
  useSectionTitleAnimation();

  return (
    <div>
      <Background />
      <HeroSection />
      
      <section id="section-process" className="home-section">
        <div className="section-header">
          <h2 className="section-title" data-animate="slideIn">
            Perché noi
          </h2>
        </div>
        <ProcessSection />
      </section>
      
      <section id="services-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title" data-animate="slideIn">
            I nostri servizi
          </h2>
        </div>
        <StickySections />
      </section>
      
      <section id="portfolio-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title" data-animate="slideIn">
            Lavori
          </h2>
        </div>
        <Portfolio />
      </section>
      
      <section id="contact-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title" data-animate="slideIn">
            Contatti
          </h2>
        </div>
        {/* Form contatti qui */}
      </section>
    </div>
  );
};

export default Home;