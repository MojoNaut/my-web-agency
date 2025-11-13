import React, { useEffect } from 'react';
import './Background.css';

const Background = () => {
  useEffect(() => {
  const isMobile = window.innerWidth < 768;
  const gradients = document.querySelectorAll('.gradient');
  
  gradients.forEach((gradient, index) => {
    // ⭐ Su mobile: mostra solo 3 gradienti invece di 5
    if (isMobile && index > 2) {
      gradient.style.display = 'none';
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const randomStartX = Math.random() * vw;
    const randomStartY = Math.random() * vh;
    const randomEndX = Math.random() * vw;
    const randomEndY = Math.random() * vh;

    gradient.style.setProperty('--start-x', `${randomStartX}px`);
    gradient.style.setProperty('--start-y', `${randomStartY}px`);
    gradient.style.setProperty('--end-x', `${randomEndX}px`);
    gradient.style.setProperty('--end-y', `${randomEndY}px`);
  });
}, []);
  return (
    <>
    <div className="bgStick background-site"> 
      <div className="gradient" id="gradient0"></div>
      <div className="gradient" id="gradient1"></div>
      <div className="gradient" id="gradient2"></div>
      <div className="gradient" id="gradient3"></div>
      <div className="gradient" id="gradient4"></div>
      </div>
    </>
  );
};

export default Background;
