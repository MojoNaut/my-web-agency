import React from 'react';
import './ProcessCarousel.css';
const ProcessCarousel = () => {
    return (
        <section className="process-carousel">
            <h2>Our Process</h2>
            <div className="carousel">
                <div className="carousel-item">Step 1</div>
                <div className="carousel-item">Step 2</div>
                <div className="carousel-item">Step 3</div>
                {/* Add more steps as needed */}
            </div>
        </section>
    );
}

export default ProcessCarousel;
