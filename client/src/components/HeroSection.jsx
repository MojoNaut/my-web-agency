// client/src/components/HeroSection.jsx
import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoCard = videoRef.current;
    const content = contentRef.current;

    if (!container || !videoCard || !content) return;

    // Breakpoints
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches;
    const isMobile = !isDesktop && !isTablet;

    // Cleanup eventuale di trigger/tween precedenti
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf([videoCard, content]);

    // Stato base comune (delego layout al CSS, qui solo init coerenti)
    if (isMobile || isTablet) {
      // MOBILE & TABLET: nessuna animazione
      gsap.set(videoCard, {
        width: '100%',
        height: '100vh',
        maxWidth: 'none',
        borderRadius: 0,
      });
      gsap.set(content, {
        opacity: 1,
        y: 0,
      });
      return; // stop qui per mobile/tablet
    }

    // DESKTOP: animazione completa
    // Stato iniziale full screen
    gsap.set(videoCard, {
      width: '100%',
      height: '100vh',
      maxWidth: 'none',
      borderRadius: 0,
    });

    // Testo visibile da subito (poi svanisce)
    gsap.set(content, { opacity: 1, y: 0 });

    // Timeline principale
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%', // lunghezza sequenza
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // Formazione card + fade out testo
    tl.add('formCard', 0.1)
      .to(
        videoCard,
        {
          width: '70vw',
          maxWidth: 1400,
          height: '80vh',
          borderRadius: 35,
          ease: 'power1.out',
          duration: 1,
        },
        'formCard'
      )
      .to(
        content,
        {
          opacity: 0,
          y: -40,
          ease: 'power3.out',
          duration: 0.6,
        },
        'formCard+=1'
      )
      // piccolo hold cinematografico
      .to({}, { duration: 0.4 });



    // Toggle header state (fade morbido gestito via CSS transition)
    const headerEl = document.querySelector('.header');

    // Stato iniziale header
    headerEl?.classList.add('hero-state');
    headerEl?.classList.remove('card-state');
// Trigger header immediato, appena parte lo scroll
const headerTrigger = ScrollTrigger.create({
  trigger: container,
  start: 'top top+=12px',  // appena muovi il dito
  end: 'bottom top',
  onEnter: () => {
    headerEl?.classList.remove('hero-state');
    headerEl?.classList.add('card-state');
  },
  onLeaveBack: () => {
    headerEl?.classList.add('hero-state');
    headerEl?.classList.remove('card-state');
  }
});


    // Hardening: refresh su resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      headerTrigger.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      <div className="hero-content">
        {/* Video card con overlay */}
        <div className="hero-video-card" ref={videoRef}>
          <video className="hero-video" autoPlay loop muted playsInline>
            <source
              src="https://cdn.prod.website-files.com/65f0eda4907429e328a9b8a2%2F67070fe8112f313490b381b6_Sparkhouse%20Website%20Banner%20Video%202024%20-30sec%20Handbrake-transcode.mp4"
              type="video/mp4"
            />
          </video>
 

          <div className="hero-video-overlay" />
        </div>

        {/* Testo overlay */}
        <div className="hero-video-content" ref={contentRef}>
          <h1 className="hero-title-inside">
            Produciamo video con <span className="highlight">anima</span> e{' '}
            <span className="highlight">impatto</span>
          </h1>
          <div className="cta-scroll-inside">
            <button
              className="ctaBColor ctaColor"
              onClick={() =>
                document.getElementById('section-process')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Scopri di più
            </button>
            <button
              className="ctaBColor ctaColor"
              onClick={() =>
                document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Guarda i progetti
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
