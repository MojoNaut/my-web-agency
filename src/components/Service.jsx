import React, { useEffect } from 'react';
import './Service.css';

const handleTouchStart = (event) => {
  const containetCards = event.currentTarget;
  containetCards.classList.add('TouchCard');
};

const handleTouchEnd = (event) => {
  const containetCards = event.currentTarget;
  containetCards.classList.remove('TouchCard');
};

const Service = () => {
  useEffect(() => {
    // Debugging: Check if video elements are properly set to autoplay
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      console.log('Setting video to autoplay:', video);
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    });
  }, []);

  return (
    <div className="containetCards">
      <ul id="cards">
        <li className="card" id="card-1">
          <div className="card-content">
            <div className="infoConteinerThing">
              <h2>Web Development</h2>
              <div className="infoContainerWrap">
                <div className="containerInfo textInfo">Campaign Strategy</div>
                <div className="containerInfo textInfo">Brand Identity</div>
                <div className="containerInfo textInfo">Social Ads</div>
              </div>
              <p>Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.</p>
            </div>
            <div className="containerimg">
              <figure className="AutoplayVideo_video">
                <video loop muted playsInline autoPlay>
                  <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
            <div className="containerArrow1">
              <i className="fa fa-arrow-left"></i>
              <span className="findMore">Find More</span>
            </div>
          </div>
        </li>
        <li className="card" id="card-2">
          <div className="card-content">
            <div className="infoConteinerThing">
              <h2>Branding</h2>
              <div className="infoContainerWrap">
                <div className="containerInfo textInfo">Campaign Strategy</div>
                <div className="containerInfo textInfo">Brand Identity</div>
                <div className="containerInfo textInfo">Social Ads</div>
              </div>
              <p>This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="containerimg">
              <figure className="AutoplayVideo_video">
                <video loop muted playsInline autoPlay>
                  <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
            <div className="containerArrow1">
              <i className="fa fa-arrow-left"></i>
              <span className="findMore">Find More</span>
            </div>
          </div>
        </li>
        <li className="card" id="card-3">
          <div className="card-content">
            <div className="infoConteinerThing">
              <h2>Creativity Content</h2>
              <div className="infoContainerWrap">
                <div className="containerInfo textInfo">Video Production</div>
                <div className="containerInfo textInfo">Video Editing</div>
                <div className="containerInfo textInfo">Motion Animation</div>
              </div>
              <p>This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="containerimg">
              <figure className="AutoplayVideo_video">
                <video loop muted playsInline autoPlay>
                  <source src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </figure>
            </div>
            <div className="containerArrow1">
              <i className="fa fa-arrow-left"></i>
              <span className="findMore">Find More</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Service;
