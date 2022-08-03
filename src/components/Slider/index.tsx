import React, { FC, useRef } from 'react';
import { AppButton } from '@components/AppButton';
import { AppText } from '@components/AppText';
import { RouteNames } from '@router/routeNames';
import { Navigator } from '@services/navigatorService';
import * as Styles from './styles';
import { Props } from './types';

export const Slider: FC<Props> = ({ slides, onClick, handleShowModal }) => {
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

  const handleSlideClick = (id: string) => () => {
    onClick?.(id);
  };

  return (
    <Styles.Container>
      <Styles.SliderIconLeft onClick={handleSlideLeft} />
      <Styles.SliderContainer ref={sliderCardRef}>
        <Styles.Slider ref={sliderRef}>
          {slides.map((slide) => (
            <Styles.SliderCard key={slide.id}>
              <Styles.SliderCardImage src={slide.image} alt="logo" />
              <Styles.SliderIconStar title='Оценить' onClick={handleShowModal} />
              <Styles.SliderCardInfo>
                <AppText text={slide.name} size='lg' tag='h1' />
                <AppText text={slide.countries} />
                <AppText text={slide.year} />
                <AppText text={slide.genres} />
                <AppButton title='Подробнее' onClick={handleSlideClick(slide.id)} />
              </Styles.SliderCardInfo>
            </Styles.SliderCard>
          ))}
        </Styles.Slider>
      </Styles.SliderContainer>
      <Styles.SliderIconRight onClick={handleSlideRight} />
    </Styles.Container>
  );
};
