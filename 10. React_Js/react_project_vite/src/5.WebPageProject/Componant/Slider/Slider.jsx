import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import slider1 from '../../Logo/slider1.webp';
import slider2 from '../../Logo/slider2.jpg';
import singleSlide from '../../Logo/singleSlide.webp';

import './slider.css';

const items = [
  {
    key: 1,
    src: slider1,
  },
  {
    key: 2,
    src: slider2,
  },
];

export default function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img  src={item.src} alt={item.altText} />
        <CarouselCaption
          className="text-danger"
        />
      </CarouselItem>
    );
  });

  return (
    <div className="container w-100 pt-5 pb-5 d-flex justify-content-between align-items-center">
      {/* <div className="rightSlider"> */}
       
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      {/* </div> */}
      <div className='right-div'>
        <img className='right-img' src={singleSlide} alt="" />
      </div>
     
    </div>
  );
}
