import "./style.css"

import { useState } from 'react';
import { useEffect } from 'react';

const ImageSlide = () => {
  
    const images = [
        "https://i.pinimg.com/564x/35/41/42/35414291b1111a892e76cc97c28b5a95.jpg",
        "https://i.pinimg.com/564x/9e/0b/74/9e0b749bf2d9735a689ed7956ede0e9b.jpg",
        "https://i.pinimg.com/564x/de/55/ff/de55fff64586b6e9bf8c88506080f86c.jpg",
        "https://i.pinimg.com/564x/de/55/ff/de55fff64586b6e9bf8c88506080f86c.jpg",
      ];

    const [current, setCurrent] =useState(0);

    function nextSlide() {
      setCurrent(current === images.length-1 ? 0 : current + 1 );
    }

    function prevSlide() {
      setCurrent(current === 0 ? images.length-1 : current - 1 );
    }
    return (
      <div className="App">
        <h2>title</h2>
        <div className='slider' onClick={prevSlide}>
          <div className='left-arrow'>
          ◀️
          </div>
          <div className='right-arrow' onClick={nextSlide}>
          ▶️
          </div>
          {images.map(
            (image, index) =>
            current===index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
          )}
          
        </div>
      </div>
  
    );
}

export default ImageSlide;