// /src/hooks/useSectionTitleAnimation.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSectionTitleAnimation = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('[data-animate="slideIn"]');
    
    console.log('🎯 Titoli trovati:', titles.length); // ⭐ DEBUG
    
    if (titles.length === 0) {
      console.warn('⚠️ Nessun titolo con data-animate="slideIn" trovato!');
      return;
    }

    const triggers = [];

    titles.forEach((title, index) => {
      console.log(`✅ Animazione per: "${title.textContent}"`); // ⭐ DEBUG
      
      // ⭐ FORZA lo stato iniziale
      gsap.set(title, {
        opacity: 0,
        y: 40
      });

      // ⭐ Poi anima
      const animation = gsap.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%', // ⭐ Più in basso per triggerare prima
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          markers: false, // ⭐ Cambia a true per vedere i marker di debug
          onEnter: () => console.log(`📍 Entered: ${title.textContent}`),
        }
      });

      triggers.push(animation.scrollTrigger);
    });

    return () => {
      console.log('🧹 Cleanup triggers');
      triggers.forEach(trigger => trigger && trigger.kill());
    };
  }, []);
};