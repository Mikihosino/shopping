import React, { useState } from 'react';
import './Slideshow.css'; 
import slide1 from '../assets/slide1.png';

export const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusDivs = (n) => {
    showDivs(slideIndex + n);
  };

  const currentDiv = (n) => {
    showDivs(n);
  };

  const showDivs = (n) => {
    const x = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('demo');
    
    if (n > x.length) {
      n = 1;
    }
    if (n < 1) {
      n = x.length;
    }

    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' w3-white', '');
    }

    x[n - 1].style.display = 'block';
    dots[n - 1].className += ' w3-white';

    setSlideIndex(n);
  };

  return (
    <div className="w3-container">
      <div className="w3-content w3-display-container" style={{ maxWidth: '800px' }}>
        <img className="mySlides" src='../assets/slide1.png' style={{ width: '50%' }} alt="Slide 1" />
        <img className="mySlides" src="img_snow_wide.jpg" style={{ width: '100%' }} alt="Slide 2" />
        <img className="mySlides" src="img_mountains_wide.jpg" style={{ width: '100%' }} alt="Slide 3" />
        <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{ width: '100%' }}>
          <div className="w3-left w3-hover-text-khaki" onClick={() => plusDivs(-1)}>&#10094;</div>
          <div className="w3-right w3-hover-text-khaki" onClick={() => plusDivs(1)}>&#10095;</div>
          <span className={`w3-badge demo w3-border w3-transparent w3-hover-white ${slideIndex === 1 ? 'w3-white' : ''}`} onClick={() => currentDiv(1)}></span>
          <span className={`w3-badge demo w3-border w3-transparent w3-hover-white ${slideIndex === 2 ? 'w3-white' : ''}`} onClick={() => currentDiv(2)}></span>
          <span className={`w3-badge demo w3-border w3-transparent w3-hover-white ${slideIndex === 3 ? 'w3-white' : ''}`} onClick={() => currentDiv(3)}></span>
        </div>
      </div>
    </div>
  );
};

