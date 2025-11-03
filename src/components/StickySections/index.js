// /src/components/StickySections/index.jsx
import React, { useEffect, useRef } from 'react';
import { preloadImages } from './utils';
import './StickySections.css';

const StickySections = () => {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Verifica che le librerie siano caricate
    if (!window.gsap || !window.ScrollTrigger || !window.Lenis) {
      console.error('Librerie mancanti! Assicurati che siano caricate in index.html');
      return;
    }

    const { gsap } = window;
    const { ScrollTrigger } = window;
    const Lenis = window.Lenis;

    gsap.registerPlugin(ScrollTrigger);

    // Inizializza Lenis per smooth scrolling
    const initSmoothScrolling = () => {
      lenisRef.current = new Lenis({
        lerp: 0.2,
        smoothWheel: true
      });

      lenisRef.current.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    // Funzione per le animazioni scroll (Demo 8 effect)
    const initScrollAnimations = () => {
      const contentElements = gsap.utils.toArray('.content--sticky');
      
      contentElements.forEach(el => {
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'center center',
            end: 'max',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          filter: 'blur(3px)',
          scrollTrigger: {
            trigger: el,
            start: 'center center',
            end: '+=100%',
            scrub: true
          }
        }, 0)
        .to(el, {
          ease: 'none',
          scale: 0.4,
          yPercent: -50
        }, 0);
      });
    };

    // Inizializza tutto dopo il caricamento delle immagini
    const init = async () => {
      document.body.classList.add('loading');
      
      // Attendi il caricamento delle immagini/video
      await preloadImages('.content__img, video');
      
      document.body.classList.remove('loading');
      
      // Inizializza smooth scrolling
      initSmoothScrolling();
      
      // Inizializza animazioni
      initScrollAnimations();
      
      // Auto-play videos
      const videos = containerRef.current?.querySelectorAll('video');
      videos?.forEach(video => {
        video.play().catch(err => console.log('Video autoplay failed:', err));
      });
    };

    init();

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="demo8-wrapper" ref={containerRef}>
      <div className="wrap">
        {/* Card 1 */}
        <div className="content content--sticky content--card bg-1">
          <div className="content__inner">
            <div className="content__text-wrapper">
              <h2 className="content__title">BRAND PERSPECTIVE</h2>
              <div className="content__tags">
                <span className="tag">Video manifesto</span>
                <span className="tag">Company profile</span>
                <span className="tag">Brand stories</span>
              </div>
              <p className="content__text text-meta">
                Raccontiamo chi sei davvero
              </p>
            </div>
            <div className="content__media">
              <video 
                className="content__video" 
                loop 
                muted 
                playsInline 
                autoPlay
              >
                <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="content content--sticky content--card bg-2">
          <div className="content__inner">
            <div className="content__text-wrapper">
              <h2 className="content__title">PRODUCT FOCUS</h2>
              <div className="content__tags">
                <span className="tag">Demo prodotto</span>
                <span className="tag">Fashion films</span>
                <span className="tag">Food & beverage</span>
              </div>
              <p className="content__text text-meta">
                Mostriamo il valore di ciò che fai
              </p>
            </div>
            <div className="content__media">
              <video 
                className="content__video" 
                loop 
                muted 
                playsInline 
                autoPlay
              >
                <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="content content--sticky content--card bg-3">
          <div className="content__inner">
            <div className="content__text-wrapper">
              <h2 className="content__title">SOCIAL ANGLES</h2>
              <div className="content__tags">
                <span className="tag">Vertical stories</span>
                <span className="tag">Campaign videos</span>
                <span className="tag">Social content</span>
              </div>
              <p className="content__text text-meta">
                Content che connette e converte
              </p>
            </div>
            <div className="content__media">
              <video 
                className="content__video" 
                loop 
                muted 
                playsInline 
                autoPlay
              >
                <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySections;