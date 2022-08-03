import { RouteNames } from '@router/routeNames';
import { Navigator } from '@services/navigatorService';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../components/Modal';
import { Slider } from '../../components/Slider';
import { getTopAction } from '../../store/actions/movies';
import { State } from '../../store/reducers';
import * as Styled from './styles';

const RATING_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Main: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const movies = useSelector((state: State) => state.movies.topFilms);

  const handleSlideClick = (id: string) => {
    Navigator.push(`${RouteNames.MOVIES}/${id}`);
  };

  const slides = useMemo(
    () =>
      movies.films.map((film) => ({
        id: `${film.filmId}`,
        image: film.posterUrlPreview || '',
        name: film.nameRu || '',
        year: film.year || '',
        genres: film.genres.map(genre => genre.genre).join(', ') || '',
        countries: film.countries.map(country => country.country).join(', ') || '',
      })),
    [movies],
  );

  useEffect(() => {
    dispatch(getTopAction.request({ page }));
  }, [dispatch, page]);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Slider slides={slides} onClick={handleSlideClick} handleShowModal={handleShowModal} />
      <Modal showModal={showModal} onClose={setShowModal} title="Rating" text="Rate the movie">
        <Styled.RatingBlock>
          {RATING_ITEMS.map((ratingItem) => (
            <Styled.RatingItem key={ratingItem}>{ratingItem}</Styled.RatingItem>
          ))}
        </Styled.RatingBlock>
      </Modal>
    </>
  );
};
