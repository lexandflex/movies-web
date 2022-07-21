import React, { useRef, useState } from 'react';
import * as Styles from './styles';

export const Slider = () => {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderCardRef = useRef<HTMLDivElement>(null);

  const handleSlideRight = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft += sliderCardRef.current.offsetWidth * 3;
    }
  };

  const handleSlideLeft = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft -= sliderCardRef.current.offsetWidth * 3;
    }
  };

  return (
    <Styles.Container>
      <Styles.SliderContainer>
        <Styles.SliderIconLeft size={40} onClick={handleSlideLeft} />
        <Styles.Slider ref={sliderRef}>
          {slides.map((slide) => (
            <Styles.SliderCard ref={sliderCardRef} key={slide}>
              <Styles.SlidercardImage
                src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/360"
                alt="logo"
              />
            </Styles.SliderCard>
          ))}
        </Styles.Slider>
        <Styles.SliderIconRight size={40} onClick={handleSlideRight} />
      </Styles.SliderContainer>
    </Styles.Container>
  );
};
