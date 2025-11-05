

import React, { useRef } from 'react';
import { useAnimateLinesOnView } from '../hooks/useAnimateLinesOnView';
import './ProcessSection.css';

const ProcessSection = () => {
  const animateThingsMindRef = useRef(null);

  useAnimateLinesOnView(animateThingsMindRef, '.thingsMind', 300);

  return (
    <section id="section-process" className="section-process">
      <div className="text animateThingsMind" ref={animateThingsMindRef}>
        <div className="thingsMind">
          <div className="thingsTitle">
            <p>01/</p><h3>ASCOLTO</h3>
          </div>
          <div className="thingsText">
            <h4>Ogni progetto nasce da un confronto vero.</h4>
          </div>
        </div>
        <hr className="style4 text" />

        <div className="thingsMind">
          <div className="thingsTitle">
            <p>02/</p><h3>CREIAMO</h3>
          </div>
          <div className="thingsText">
            <h4>Costruiamo tutto attorno alla tua storia.</h4>
          </div>
        </div>
        <hr className="style4 text" />

        <div className="thingsMind">
          <div className="thingsTitle">
            <p>03/</p><h3>CONSEGNA</h3>
          </div>
          <div className="thingsText">
            <h4>Il video che ricevi è pronto per funzionare.</h4>
          </div>
        </div>
        <hr className="style4 text" />
      </div>
    </section>
  );
};

export default ProcessSection;
