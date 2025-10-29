import React, { useEffect, useRef } from 'react';
import Background from './Background';
import Service from './Service';
import Portfolio from './Portfolio';
import CtaContact from './CtaContact';
import './Home.css';

const Home = () => {
  const fixedText1Ref = useRef(null);
  const fixedText2Ref = useRef(null);
  const fixedText3Ref = useRef(null);

  useEffect(() => {
    // Delay the addition of the animation class for scroll-text
    const timer = setTimeout(() => {
      const scrollText = document.querySelector('.scroll-text');
      if (scrollText) {
        scrollText.classList.add('animate');
      }
    }, 500); // 0.5 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    // Animate fixed-text line by line
    const lines = document.querySelectorAll('.fixed-text .line');
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add('animate');
      }, index * 500); // Delay each line
    });
  }, []);

  useEffect(() => {
    // Intersection Observer to trigger animation when .fixed-text2 is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add('animate');
              }, index * 500); // Delay each line
            });
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (fixedText2Ref.current) {
      observer.observe(fixedText2Ref.current);
    }

    return () => {
      if (fixedText2Ref.current) {
        observer.unobserve(fixedText2Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Intersection Observer to trigger animation when .fixed-text3 is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add('animate');
              }, index * 500); // Delay each line
            });
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (fixedText3Ref.current) {
      observer.observe(fixedText3Ref.current);
    }

    return () => {
      if (fixedText3Ref.current) {
        observer.unobserve(fixedText3Ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // Intersection Observer to trigger animation when .fixed-text3 is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add('animate');
              }, index * 500); // Delay each line
            });
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (fixedText1Ref.current) {
      observer.observe(fixedText1Ref.current);
    }

    return () => {
      if (fixedText1Ref.current) {
        observer.unobserve(fixedText1Ref.current);
      }
    };
  }, []);

  // New Intersection Observer for animateThingsMind
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.thingsMind');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate');
              }, index * 300); // Delay each element
            });
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const animateThingsMind = document.querySelector('.animateThingsMind');
    if (animateThingsMind) {
      observer.observe(animateThingsMind);
    }

    return () => {
      if (animateThingsMind) {
        observer.unobserve(animateThingsMind);
      }
    };
  }, []);

  return (
    <div>
      <Background />
      <section className="hero-section">
        <div className="fixed-text">
          <div className="textFixed">
          <h1 className="text">
  <div className="line">Ogni brand</div>
  <div className="line">merita il suo</div>
  <div className="line">punto di vista</div>
</h1>
          </div>
          <div className="scroll-text">
            <div className="textScroll">
              <h6 className="text">
  Studio boutique di produzione video. Qualità cinematografica, narrazione su misura. Veneto, Italia.
</h6>
            </div>
          </div>
          <div className="cta-scroll">
            <span className="ctaBColor ctaColor">Scroll Down</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </section>
      <section className="">
      <div className="fixed-text1" ref={fixedText1Ref}>
            <h2 className="text">
              <div className="line">what we do</div>
            
            </h2>
          </div>
        <Service />
      </section>
      <section className="">
        <div>
          <div className="fixed-text2" ref={fixedText2Ref}>
            <h2 className="text">
              <div className="line">We dive into a</div>
              <div className="line">project with three</div>
              <div className="line">things in mind</div>
            </h2>
          </div>
          <div className="text animateThingsMind">
            <div className="thingsMind">
              <div className="thingsTitle"><p>01/</p><h3>Beauty</h3></div><div className="thingsText"><h4>Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.</h4></div>
            </div>
            <hr className="style4 text"></hr>
            <div className="thingsMind">
              <div className="thingsTitle"><p>02/</p><h3>Thought</h3></div><div className="thingsText"><h4>Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.</h4></div>
            </div>
            <hr className="style4 text"></hr>
            <div className="thingsMind">
              <div className="thingsTitle"><p>03/</p><h3>Result</h3></div><div className="thingsText"><h4>Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.</h4></div>
            </div>
            <hr className="style4 text"></hr>
          </div>
        </div>
      </section>
      <section className="">
        <div className="fixed-text3" ref={fixedText3Ref}>
          <h2 className="text">
            <div className="line">have a look</div>
            <div className="line">to our work</div>
          </h2>
        </div>
        <Portfolio />
      </section>
      <section className="">
        <CtaContact />
      </section>
    </div>
  );
};

export default Home;
