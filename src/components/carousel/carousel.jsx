import React, { useState } from 'react';
import './carousel.scss';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };

    const goToPrevSlide = () => {
        const prevIndex = (currentIndex + images.length - 1) % images.length;
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="carousel">
            {/* eslint-disable-next-line */}
            <img src={images[currentIndex]} alt={`Image de ${currentIndex}`} className="carousel-image" />
            <button className="carousel-button prev" onClick={goToPrevSlide}>
                &lt;
            </button>
            <button className="carousel-button next" onClick={goToNextSlide}>
                &gt;
            </button>
            <div className="image-indicator">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
}

export default Carousel;
