import React, { useState, useEffect, useRef } from 'react';

const img = [
  { url: "./images/14.png" },
  { url: "./images/15.png" },
  { url: "./images/11.jpg" },

];
const delay = 3000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {img.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage }}

          >
            <img class="banner-img" src={backgroundImage.url}/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {img.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
} 