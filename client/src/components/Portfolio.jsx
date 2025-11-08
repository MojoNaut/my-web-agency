import React, { useState, useEffect } from 'react';
import { fetchPortfolio } from "../sanity/queries";
import './Portfolio.css';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(6);

 useEffect(() => {
  fetchPortfolio()
    .then((data) => {
      setPortfolioItems(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);


  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 6);
  };

  const handleTouchStart = (event) => {
    const portfolioItem = event.currentTarget;
    portfolioItem.classList.add('TouchCard');
  };

  const handleTouchEnd = (event) => {
    const portfolioItem = event.currentTarget;
    portfolioItem.classList.remove('TouchCard');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading portfolio: {error.message}</p>;
  }

  return (
    <div>
      <div className="portfolio">
        {portfolioItems.slice(0, itemsToShow).map((item, index) => (
          <div
            key={item._id}
            className={`portfolio-item portfolio-item-${index % 6}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
             <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="portfolio-content">
             
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="portfolio-img"
                />
                <img 
                  src={item.hoverImageUrl} 
                  alt={item.title}
                  className="portfolio-imghover"
                />
                <div className="overLay"></div>
             
              <div className="portfolio-details">
                <div className="portfolio-category containerInfo1 textInfo1">{item.category}</div>
                <div className="portfolio-hashtags">
                  {item.hashtags.map((hashtag, index) => (
                    <span key={index} className="portfolio-hashtag containerInfo1 ">{hashtag}</span>
                  ))}
                </div>
                <div className="containerArrow2 ctaBColor">
                  <i className="fa fa-arrow-left ctaColor"></i>
                </div>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
      {itemsToShow < portfolioItems.length && (
        <div className="cta-scroll1">
          <span onClick={loadMoreItems} className="ctaBColor ctaColor">Load More</span>
          <div className="arrow-down"></div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
