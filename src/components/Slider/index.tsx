import React, { FC, useEffect, useRef, useState } from 'react';
import { AppButton } from '@components/AppButton';
import { AppText } from '@components/AppText';
import * as Styles from './styles';
import { Props } from './types';

export const Slider: FC<Props> = ({ slides, onClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderCardRef = useRef<HTMLDivElement>(null);

  const [numberOfscrollableSlides, setNumberOfscrollableSlides] = useState(0);

  useEffect(() => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      setNumberOfscrollableSlides(
        Math.trunc(sliderRef.current.clientWidth / sliderCardRef.current.clientWidth),
      );
    }
  }, [sliderRef, sliderCardRef]);

  const handleSlideRight = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft += sliderCardRef.current.offsetWidth * numberOfscrollableSlides;
    }
  };

  const handleSlideLeft = () => {
    if (sliderRef && sliderRef.current && sliderCardRef && sliderCardRef.current) {
      sliderRef.current.scrollLeft -= sliderCardRef.current.offsetWidth * numberOfscrollableSlides;
    }
  };

  const handleSlideClick = (id: string) => () => {
    onClick?.(id);
  };

  return (
    <Styles.Container>
      <Styles.SliderIconLeft onClick={handleSlideLeft} />
      <Styles.SliderContainer>
        <Styles.Slider ref={sliderRef}>
          {slides.map((slide) => (
            <Styles.SliderCard key={slide.id} ref={sliderCardRef}>
              <Styles.SliderCardImage src={slide.image} alt="logo" />
              <Styles.SliderCardInfo>
                <AppText text={slide.name} tag="h1" />
                <AppText text={slide.countries} />
                <AppText text={slide.year} />
                <AppText text={slide.genres} />
                <AppButton title="Подробнее" onClick={handleSlideClick(slide.id)} />
              </Styles.SliderCardInfo>
            </Styles.SliderCard>
          ))}
        </Styles.Slider>
      </Styles.SliderContainer>
      <Styles.SliderIconRight onClick={handleSlideRight} />
    </Styles.Container>
  );
};
