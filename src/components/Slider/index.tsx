import React, { FC, useRef, useState } from 'react';
import * as Styles from './styles';
import { Props } from './types';

export const Slider: FC<Props> = ({ slides }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderCardRef = useRef<HTMLDivElement>(null);

  const handleSlideRight = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft += sliderCardRef.current.offsetWidth;
    }
  };

  const handleSlideLeft = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft -= sliderCardRef.current.offsetWidth;
    }
  };

  return (
    <Styles.Container>
      <Styles.SliderIconLeft onClick={handleSlideLeft} />
      <Styles.SliderContainer ref={sliderCardRef}>
        <Styles.Slider ref={sliderRef}>
          {slides.map((slide) => (
            <Styles.SliderCard key={slide.id}>
              <Styles.SlidercardImage src={slide.image} alt="logo" />
            </Styles.SliderCard>
          ))}
        </Styles.Slider>
      </Styles.SliderContainer>
      <Styles.SliderIconRight onClick={handleSlideRight} />
    </Styles.Container>
  );
};
