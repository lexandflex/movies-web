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
  const { totalRating, numberOfAppraisers, yourRating } = useSelector(movieRatingSelector);

  console.log({ totalRating, numberOfAppraisers, yourRating });

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const currentFilm = useMemo(() => films[id || ''], [films, id]);

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
      {currentFilm ? (
        <Styled.MainInfo>
          <Styled.RatingWrapper>
            <AppText
              tag="h1"
              size="xl"
              text={
                `${currentFilm?.nameRu} (${currentFilm?.nameOriginal || ''} — ${
                  currentFilm?.countries[0].country
                })` || ''
              }
            />
            <Styled.RatingStar title="Рейтинг" onClick={handleShowModal} />
          </Styled.RatingWrapper>
          <AppText color="secondTextColor" text={currentFilm?.description || ''} />
          <Styled.FilmInfo>
            <Styled.FilmDetails>
              <AppText
                color="accentColor"
                text={`JunkieTV: ${
                  numberOfAppraisers ? (totalRating / numberOfAppraisers).toFixed(1) : '-' || ''
                }`}
              />
              <AppText
                color="secondTextColor"
                text={`Кинопоиск: ${currentFilm?.ratingKinopoisk || ''}`}
              />
              <AppText color="secondTextColor" text={`IMDB: ${currentFilm?.ratingImdb || ''}`} />
              <AppText color="secondTextColor" text={`Год выпуска: ${currentFilm?.year || ''}`} />
              <AppText color="secondTextColor" text={`${currentFilm?.ratingAgeLimits}+`} />
              <AppText
                color="secondTextColor"
                text={`Длительность: ${currentFilm?.filmLength} ${declOfNum(
                  currentFilm?.filmLength,
                  ['минута', 'минуты', 'минут'],
                )}`}
              />
            </Styled.FilmDetails>

            <Styled.Genres>
              {currentFilm?.genres?.map(({ genre }) => (
                <AppText key={genre} color="secondTextColor" text={`• ${genre || ''}`} />
              ))}
            </Styled.Genres>
          </Styled.FilmInfo>
        </Styled.MainInfo>
      ) : (
        <AppText className="center" size="lg" text="Нет информации о фильме" />
      )}

      <Styled.Player>
        <div id="yohoho" data-kinopoisk={id} data-resize="1" />
      </Styled.Player>

      <RatingModal
        showModal={showModal}
        onClose={handleShowModal}
        totalVotes={numberOfAppraisers}
        totalRate={totalRating}
        yourRating={yourRating}
        filmId={id || ''}
      />
    </Styled.Container>
  );
};
