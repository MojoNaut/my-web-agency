// Home.jsx
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
      {/* BACKGROUND */}
      <Background />

      {/* HERO */}
      <HeroSection />

      {/* PERCHÉ NOI */}
      <section id="section-process" className="home-section">
        <div className="section-header">
          <h2 className="section-title">Perché noi</h2>
        </div>
        <ProcessSection />
      </section>

      {/* SERVIZI */}
      <section id="services-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title">I nostri servizi</h2>
        </div>
        <StickySections />
      </section>

      {/* LAVORI */}
      <section id="portfolio-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title">Lavori</h2>
        </div>
        <Portfolio />
      </section>

      {/* CONTATTI */}
      <section id="contact-section" className="home-section">
        <div className="section-header">
          <h2 className="section-title">Contatti</h2>
        </div>
        {/* Inserisci qui il componente o contenuto contatti */}
      </section>
    </div>
  );
};

export default Home;
