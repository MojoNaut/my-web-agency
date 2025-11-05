// /src/hooks/useSectionTitleAnimation.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export const useSectionTitleAnimation = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('[data-animate="slideIn"]');

    titles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.to(title, {
        scrambleText: {
          text: title.textContent,
          chars: 'upperCase',
          revealDelay: 0.2,
          tweenLength: false,
          speed: 0.3
        },
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
