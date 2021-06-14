import React, { useState, useEffect } from "react";

import { Slide } from "./index";

const TIMER_DURATION = 15000;

export default function AppCarousel({ slides, children }){

  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    if(current < (slideLength - 1)){
      return setCurrent(c => c + 1);
    }
    setCurrent(0)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, TIMER_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  const renderSlides = () => (
    slides.map((slide, idx) => (
      <Slide
        slide={slide}
        current={current}
        index={idx}
      />
    ))
  );

  return(
    <div className="slide">
      {renderSlides()}
      {children}
    </div>
  );
}