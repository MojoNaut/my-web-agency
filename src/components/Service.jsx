// src/ServiceGSAP.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Service.css';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const containerRef = useRef();
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Auto-play videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    });

    // GSAP Animation Context
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      
      // Configurazione responsive
      ScrollTrigger.matchMedia({
        // Desktop & Tablet
        "(min-width: 769px)": function() {
          cards.forEach((card, index) => {
            // Timeline per ogni card
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 15%", // Quando la card raggiunge il 15% dall'alto
                end: "bottom 15%",
                scrub: 1, // Smooth scrolling
                pin: true, // Pinna la card
                pinSpacing: false, // No spacing extra
                anticipatePin: 1, // Smoother pinning
              }
            });

            // Scale animation per le card precedenti
            if (index < cards.length - 1) {
              tl.to(card.querySelector('.card-content'), {
                scale: 0.95,
                opacity: 0.8,
                duration: 1,
                ease: "power2.inOut"
              });
            }

            // Animazione extra per hover effect
            const content = card.querySelector('.card-content');
            content.addEventListener('mouseenter', () => {
              gsap.to(content, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
              });
            });
            
            content.addEventListener('mouseleave', () => {
              gsap.to(content, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            });
          });
        },
        
        // Mobile
        "(max-width: 768px)": function() {
          // Su mobile, animazione più semplice
          cards.forEach((card) => {
            gsap.fromTo(card,
              { 
                opacity: 0,
                y: 50 
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "top 50%",
                  scrub: 1
                }
              }
            );
          });
        }
      });
      
      // Animazione di entrata per i tag
      gsap.fromTo('.containerInfo',
        { 
          opacity: 0,
          y: 20 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.containetCards',
            start: "top 60%"
          }
        }
      );
      
    }, containerRef);

    // Cleanup
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 'card-1',
      title: 'BRAND PERSPECTIVE',
      subtitle: 'Raccontiamo chi sei davvero',
      tags: ['Video manifesto', 'Company profile', 'Brand stories'],
      video: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
    },
    {
      id: 'card-2',
      title: 'PRODUCT FOCUS',
      subtitle: 'Mostriamo il valore di ciò che fai',
      tags: ['Demo prodotto', 'Fashion films', 'Food & beverage'],
      video: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
    },
    {
      id: 'card-3',
      title: 'SOCIAL ANGLES',
      subtitle: 'Content che connette e converte',
      tags: ['Vertical stories', 'Campaign videos', 'Social content'],
      video: 'https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4'
    }
  ];

  return (
    <div className="containetCards" ref={containerRef}>
      {/* Titolo sezione */}
      <div className="section-header">
        <h2 className="section-title">Ogni progetto, il suo punto di vista</h2>
      </div>

      <div id="cards-gsap">
        {cards.map((card, index) => (
          <div 
            key={card.id}
            className="card-gsap" 
            id={card.id}
            ref={el => cardsRef.current[index] = el}
          >
            <div className="card-content">
              <div className="infoConteinerThing">
                <h2>{card.title}</h2>
                <p>{card.subtitle}</p>
                <div className="infoContainerWrap">
                  {card.tags.map((tag, i) => (
                    <div key={i} className="containerInfo textInfo">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="containerimg">
                <figure className="AutoplayVideo_video">
                  <video loop muted playsInline autoPlay>
                    <source src={card.video} type="video/mp4" />
                  </video>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Frase di chiusura */}
      <div className="section-footer">
        <p className="closing-statement">
          Non esistono storie banali.<br/>
          Solo punti di vista sbagliati.
        </p>
      </div>
    </div>
  );
};

export default Service;