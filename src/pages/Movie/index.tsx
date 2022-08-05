import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filmsSelector } from '@store/selectors';
import { getInfoAboutFilmAction } from '@store/actions/movies';
import { AppText } from '@components/AppText';
import { declOfNum } from '@utils/declOfNum';
import * as Styled from './styles';

export const Movie: FC = () => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const { id } = useParams();

  const currentFilm = useMemo(() => films[id || ''], [films, id]);

  console.log({ currentFilm });

  useEffect(() => {
    if (id) {
      dispatch(getInfoAboutFilmAction.request({ id }));
    }

    const script = document.createElement('script');
    script.src = '//yohoho.cc/yo.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [dispatch, id]);

  return (
    <Styled.Container>
      <Styled.MainInfo>
        <AppText tag='h1' size='xl' text={currentFilm?.nameRu || ''} />
        <AppText
          size='sm'
          text={`${currentFilm?.nameOriginal || ''} (${currentFilm?.countries[0].country})`}
        />
        <AppText text={currentFilm?.description || ''} />
        <AppText text={`Год выпуска: ${currentFilm?.year || ''}`} />
        <AppText text={`Кинопоиск : ${currentFilm?.ratingKinopoisk || ''}`} />
        <AppText text={`IMDB : ${currentFilm?.ratingImdb || ''}`} />
        {currentFilm?.genres?.map(({ genre }) => (
          <AppText key={genre} text={genre || ''} />
        ))}
        <AppText text={`${currentFilm?.ratingAgeLimits}+`} />
        <AppText
          text={`Длительность: ${currentFilm?.filmLength} ${declOfNum(currentFilm?.filmLength, [
            'минута',
            'минуты',
            'минут',
          ])}`}
        />
      </Styled.MainInfo>
      <Styled.Player>
        <div id='yohoho' data-kinopoisk={id} />
      </Styled.Player>
    </Styled.Container>
  );
};
