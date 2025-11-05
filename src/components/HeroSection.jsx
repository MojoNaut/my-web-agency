import React, { useRef, useEffect } from 'react';
import './HeroSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const videoCardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = videoCardRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      }
    });

    tl.fromTo(card,
      { scale: 0.85, opacity: 0.8 },
      { scale: 1.1, opacity: 1, ease: "none" }
    )
    .fromTo(content,
      { opacity: 1, y: 0, scale: 1 },
      { opacity: 0, y: -80, scale: 0.9, ease: "none" },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      <div className="hero-content">
        <div className="hero-video-card" ref={videoCardRef}>
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.prod.website-files.com/65f0eda4907429e328a9b8a2%2F67070fe8112f313490b381b6_Sparkhouse%20Website%20Banner%20Video%202024%20-30sec%20Handbrake-transcode.mp4"
              type="video/mp4"
            />
          </video>

          <div className="hero-video-overlay"></div>

          <div className="hero-video-content" ref={contentRef}>
            <h1 className="hero-title-inside">
              Produciamo video con <span className="highlight">anima</span> e <span className="highlight">impatto</span>
            </h1>
            <div className="cta-scroll-inside">
              <button className="ctaBColor ctaColor" onClick={() => document.getElementById('section-process')?.scrollIntoView({ behavior: 'smooth' })}>
                Scopri di più
              </button>
              <button className="ctaBColor ctaColor" onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Guarda i progetti
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
