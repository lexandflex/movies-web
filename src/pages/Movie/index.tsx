import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filmsSelector, movieRatingSelector } from '@store/selectors';
import { getInfoAboutFilmAction, getRatingAction } from '@store/actions/movies';
import { AppText } from '@components/AppText';
import { RatingModal } from '@components/RatingModal';
import { declOfNum } from '@utils/declOfNum';
import * as Styled from './styles';

export const Movie: FC = () => {
  const dispatch = useDispatch();
  const films = useSelector(filmsSelector);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { totalRating, numberOfAppraisers } = useSelector(movieRatingSelector);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const currentFilm = useMemo(() => films[id || ''], [films, id]);

  console.log({ currentFilm });

  useEffect(() => {
    if (id) {
      dispatch(getInfoAboutFilmAction.request({ id }));
      dispatch(getRatingAction.request({ id }));
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
        <Styled.RatingStar title="Рейтинг" onClick={handleShowModal} />
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

      <RatingModal
        showModal={showModal}
        onClose={handleShowModal}
        totalVotes={numberOfAppraisers}
        totalRate={totalRating}
        filmId={id as string}
      />
    </Styled.Container>
  );
};
