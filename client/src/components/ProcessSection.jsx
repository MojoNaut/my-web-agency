import React, { useEffect, useRef } from 'react';
import './ProcessSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: '01',
    title: 'VISIONE',
    text: "Non giriamo video, costruiamo percezioni. Ogni progetto nasce da una strategia visiva capace di tradurre l'identità del brand in emozione tangibile."
  },
  {
    id: '02',
    title: 'METODO',
    text: "Creatività e rigore possono coesistere. Lavoriamo con processi chiari, tempi certi e attenzione maniacale ai dettagli, perché un'idea vale solo se funziona nel mondo reale."
  },
  {
    id: '03',
    title: 'PARTNERSHIP',
    text: "Il video è solo l'inizio. Accompagniamo ogni cliente nel tempo, per amplificare il messaggio e misurare l'impatto di ciò che abbiamo creato insieme."
  }
];

const ANIMATION_TIMING = {
  blockDuration: 1.5,
  titleDelay: 0.2,
  textDelay: 0.5,
  textFadeStart: 1.2
};

const ProcessSection = () => {
  const containerRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    // ⭐ CHECK 1: Accessibility (sempre)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      blocksRef.current.forEach(block => {
        if (!block) return;
        gsap.set(block, { opacity: 1 });
        gsap.set([
          block.querySelector('.stepHeader'),
          block.querySelector('.thingsTitle'),
          block.querySelector('.thingsText')
        ], { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1200;

      if (isMobile) {
        // ⭐ MOBILE/TABLET - Animazioni semplificate
        blocksRef.current.forEach((block, i) => {
          if (!block) return;

          // Tutto il blocco appare insieme con ScrollTrigger
          gsap.from(block, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%', // Appare quando entra in viewport
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            }
          });

          // Forza visibilità elementi interni (no animazioni interne)
          gsap.set([
            block.querySelector('.stepHeader'),
            block.querySelector('.thingsTitle'),
            block.querySelector('.thingsText')
          ], { opacity: 1, y: 0 });
        });

      } else {
        // ⭐ DESKTOP - Animazioni complesse
        blocksRef.current.forEach(block => {
          if (!block) return;
          gsap.set(block, { opacity: 1 });
          gsap.set(block.querySelector('.stepHeader'), { opacity: 0, y: 40 });
          gsap.set(block.querySelector('.thingsTitle'), { opacity: 0, y: 40 });
          gsap.set(block.querySelector('.thingsText'), { opacity: 0, y: 40 });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${data.length * 100}%`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        blocksRef.current.forEach((block, i) => {
          if (!block) return;

          const baseTime = i * ANIMATION_TIMING.blockDuration;
          const stepHeader = block.querySelector('.stepHeader');
          const title = block.querySelector('.thingsTitle');
          const text = block.querySelector('.thingsText');

          // 1. Header appare
          tl.to(stepHeader, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out'
          }, baseTime);

          // 2. Titolo appare
          tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out'
          }, baseTime + ANIMATION_TIMING.titleDelay);

          // 3. Testo appare
          tl.to(text, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }, baseTime + ANIMATION_TIMING.textDelay);

          // 4. Testo scompare
          tl.to(text, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power3.in'
          }, baseTime + ANIMATION_TIMING.textFadeStart);

          // 5. Collasso parziale
          tl.to(text, {
            maxHeight: 60,
            marginTop: 0,
            marginBottom: 0,
            duration: 0.5,
            ease: 'power3.inOut'
          }, baseTime + ANIMATION_TIMING.textFadeStart + 0.3);
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="section-process" 
      className="section-process sticky-wrapper" 
      ref={containerRef}
      aria-label="Il nostro processo di lavoro"
    >
      <div className="sticky-content">
        <div className="section-header sticky-process-title">
          <h2 className="section-title" data-animate="slideIn">
            Perché noi
          </h2>
        </div>

        {data.map((item, index) => (
          <div
            className="sticky-block"
            key={item.id}
            ref={(el) => (blocksRef.current[index] = el)}
          >
            <div className="stepHeader">
              <p className="step-number">{item.id}/</p>
              <hr className="style4 top-line" aria-hidden="true" />
            </div>

            <h3 className="thingsTitle">{item.title}</h3>

            <div className="thingsText">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;