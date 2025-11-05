// Home.jsx
import React from 'react';

import Background from './Background';
import HeroSection from './HeroSection';
import ProcessSection from './ProcessSection';
import StickySections from './StickySections';
import Portfolio from './Portfolio';


import './Home.css';

const Home = () => {

  return (
    <div>
      {/* BACKGROUND GLOBAL */}
      <Background />

      {/* HERO */}
      <HeroSection />

      {/* PROCESS / PERCHÈ NOI */}
      <ProcessSection />

      {/* SERVIZI */}
      <section id="services-section">
        <StickySections />
      </section>

      {/* WORK / PORTFOLIO */}
      <section id="portfolio-section">
        <Portfolio />
      </section>

      {/* CONTATTI */}
      <section id="contact-section">
  
      </section>

    </div>
  );
};

export default Home;
