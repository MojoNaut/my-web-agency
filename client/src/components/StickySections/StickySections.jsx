// client/src/components/StickySections.jsx
import React, { useEffect, useRef } from 'react';
import './StickySections.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'BRAND VIDEO',
    description: `Racconti chi sei, cosa fai, perché esisti.
Video per presentare l'azienda, comunicare valori, costruire fiducia.
Esterno (clienti) o interno (team, investitori).`,
    tags: ['Video manifesto', 'Company profile', 'Brand stories'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4',
    videoPoster: 'https://via.placeholder.com/800x450?text=Brand+Video'
  },
  {
    title: 'PRODUCT VIDEO',
    description: `Mostri cosa vendi e perché vale la pena sceglierti.
Demo, showcase, cataloghi digitali, e-commerce.
Fashion, food, design, industriale.`,
    tags: ['Demo prodotto', 'Fashion films', 'Food & Beverage'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4',
    videoPoster: 'https://via.placeholder.com/800x450?text=Product+Video'
  },
  {
    title: 'SOCIAL CONTENT',
    description: `Contenuti verticali che fermano lo scroll.
Instagram Reels, TikTok, Facebook Stories.
15-60 secondi, formato 9:16, pronti per pubblicare.`,
    tags: ['Vertical stories', 'Campaign videos', 'Social content'],
    videoSrc: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4',
    videoPoster: 'https://via.placeholder.com/800x450?text=Social+Content'
  }
];

const StickySections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isDesktop = window.innerWidth >= 1024;

    // 👉 Fallback statico: mobile / tablet / reduced motion
    if (!isDesktop || prefersReducedMotion) {
      const cards = container.querySelectorAll('.content--card');
      cards.forEach(card => {
        card.style.position = 'relative';
        card.style.opacity = '1';
        card.style.transform = 'none';
      });
      return;
    }

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.content--card');

      if (!cards.length) return;

      // Stato iniziale delle card (stackate una sopra l’altra)
      cards.forEach((card, index) => {
        gsap.set(card, {
          opacity: index === 0 ? 1 : 0,         // solo la prima visibile
          scale: index === 0 ? 1 : 0.96,        // micro-scale sulle successive
          yPercent: index === 0 ? 0 : 70,        // leggermente più basse
      zIndex: index + 1             // prima card sopra, le altre sotto
        });
      });

      // Timeline pinned per tutta la sezione servizi
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${cards.length * 120}%`, // durata scroll — puoi regolare
          scrub: true,
          pin: true,
          anticipatePin: 1
          // markers: true
        }
      });

      // Per ogni card (dalla seconda in poi) gestiamo lo “stack”
      cards.forEach((card, index) => {
        if (index === 0) return; // la prima è lo stato iniziale

        const prev = cards[index - 1];
        const stepTime = index * 1.0; // spaziatura temporale fra una card e l’altra

        // La nuova card entra in scena sopra
        tl.to(
          card,
          {
            opacity: 1,
            yPercent: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out'
          },
          stepTime
        );

        // La precedente scala leggermente e sfuma (effetto “livello sotto”)
        tl.to(
          prev,
          {
            scale: 0.94,
            opacity: 0.6,
            yPercent: -4,
            duration: 0.9,
            ease: 'power3.inOut'
          },
          stepTime
        );
      });

      // Leggero hold finale per non “strappare” l’uscita
      tl.to({}, { duration: 0.5 });

      // 🎥 Lazy play/pause video con IntersectionObserver (anche in pinned)
      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '120px'
        }
      );

      const videos = container.querySelectorAll('video');
      videos.forEach(v => io.observe(v));

      // Cleanup
      return () => {
        io.disconnect();
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="demo8-wrapper" ref={containerRef}>
      <div className="sticky-services-content">
        {/* Titolo sezione - rimane fisso durante la sequenza */}
        <div className="section-header sticky-services-title">
          <h2 className="section-title" data-animate="slideIn">
            I nostri servizi
          </h2>
        </div>

        {/* Stack delle card */}
        <div className="cards-stack">
          {services.map((service, index) => (
            <article
              className="content content--card"
              key={index}
              aria-label={`${service.title} - Servizio ${index + 1} di ${services.length}`}
            >
              <div className="content__inner">
                {/* Testo */}
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
                  <div className="content__tags" role="list">
                    {service.tags.map((tag, i) => (
                      <span
                        className={`tag tag-${index}`}
                        key={i}
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Video */}
                <div className="content__media">
                  <video
                    className="content__video"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={service.videoPoster}
                    aria-label={`Video dimostrativo per ${service.title}`}
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                    Il tuo browser non supporta i video HTML5.
                  </video>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickySections;
