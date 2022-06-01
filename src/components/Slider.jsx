import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, {useState } from "react";
import "./Slider.css";
import {ApiSlides} from '../api/SliderApi';
const Slider = () => {
  // Styles

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  var [slides] = useState(ApiSlides);
  var [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <div>
    <div className="slider bg-white flex items-center justify-between mobile:hidden">
      {/* left Arrow */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>

      {/* Slide */}

      {slides.map((slide, index) => {
        if (index === activeSlide) 
        {
          return (
            <div key={slide.id}>
                <img
                  className =""
                  src={slide.src}
                  alt="man"
                />
              </div>
          );
        }
        return nextSlide;
        
      }
      )}
      {/* Right Arrow */}

      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
    </div>
    </div>
  );
};

export default Slider;