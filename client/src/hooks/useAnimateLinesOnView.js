// src/hooks/useAnimateLinesOnView.js
import { useEffect } from 'react';

export const useAnimateLinesOnView = (ref, selector = '.line', delay = 500) => {
useEffect(() => {
  if (!ref?.current) return;

  const currentRef = ref.current; 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(selector);
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * delay);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(currentRef);

  return () => {
    observer.unobserve(currentRef); 
  };
}, [ref, selector, delay]);

};
