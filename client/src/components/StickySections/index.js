import React, { useEffect, useRef } from 'react';
import { preloadImages } from './utils';
import './StickySections.css';

const services = [
  {
    title: 'BRAND VIDEO',
    description: `Racconti chi sei, cosa fai, perché esisti.
Video per presentare l'azienda, comunicare valori, costruire fiducia.
Esterno (clienti) o interno (team, investitori).`,
    tags: ['Video manifesto', 'Company profile', 'Brand stories'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
  },
  {
    title: 'PRODUCT VIDEO',
    description: `Mostri cosa vendi e perché vale la pena sceglierti.
Demo, showcase, cataloghi digitali, e-commerce.
Fashion, food, design, industriale.`,
    tags: ['Demo prodotto', 'Fashion films', 'Food & Beverage'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
  },
  {
    title: 'SOCIAL CONTENT',
    description: `VContenuti verticali che fermano lo scroll.
Instagram Reels, TikTok, Facebook Stories.
15-60 secondi, formato 9:16, pronti per pubblicare.`,
    tags: ['Vertical stories', 'Campaign videos', 'Social content'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
  }
];

const StickySections = () => {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger || !window.Lenis) {
      console.error('Librerie mancanti! Assicurati che siano caricate in index.html');
      return;
    }

    const { gsap } = window;
    const { ScrollTrigger } = window;
    const Lenis = window.Lenis;

    gsap.registerPlugin(ScrollTrigger);

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
  scale: 0.4,
  yPercent: -50
}, 0);

      });
    };

    const init = async () => {
      document.body.classList.add('loading');
      await preloadImages('.content__img, video');
      document.body.classList.remove('loading');
      initSmoothScrolling();
      initScrollAnimations();

      const videos = containerRef.current?.querySelectorAll('video');
      videos?.forEach(video => {
        const tryPlay = () => {
          if (video.readyState >= 3) {
            video.play().catch(err => {
              console.warn('Autoplay fallito. Mostro poster fallback.', err);
              video.poster = 'https://via.placeholder.com/800x450?text=Video+Unavailable';
            });
          } else {
            video.addEventListener('canplay', tryPlay, { once: true });
          }
        };
        tryPlay();
      });
    };

    init();

    return () => {
      lenisRef.current?.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="demo8-wrapper" ref={containerRef}>
      <div className="wrap">
        {services.map((service, index) => (
          <div className="content content--sticky content--card" key={index}>
            <div className="content__inner">
              <div className="content__text-wrapper">
                <h2 className="content__title">{service.title}</h2>
                <p className="content__text text-meta">
                  {service.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="content__tags">
               {service.tags.map((tag, i) => (
  <span className={`tag tag-${index}`} key={i}>{tag}</span>
))}

                </div>
                
              </div>
              <div className="content__media">
                <video 
                  className="content__video" 
                  loop 
                  muted 
                  playsInline 
                  autoPlay
                >
                  <source src={service.videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}

      
     
      </div>
    </div>
  );
};

export default StickySections;
