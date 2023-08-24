import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { SLIDERDATA } from './sliderData';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000); // 2秒ごとに次のスライドに切り替える

    return () => {
      clearInterval(slideInterval); // コンポーネントがアンマウントされたときにインターバルをクリアする
    };
  }, [current]); // currentの変更時にuseEffectが実行される

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="image-slider">
      <section className='slider'>
      {SLIDERDATA.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
            <div className='image-container'>
              <img src={slide.image} alt='banner image' className='image' />
              <div className='image-blur' style={{ backgroundImage: `url(${slide.image})` }} />
            </div>
            )}
          </div>
        );
      })}      
    </section>
    </div>
    
  );
};

export default ImageSlider;
