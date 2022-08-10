import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RouteNames } from '@router/routeNames';
import { Navigator } from '@services/navigatorService';
import { RatingModal } from '@components/RatingModal';
import { Slider } from '@components/Slider';
import { MovieCollections } from '@constants/movieCollections';
import { getTopAction } from '@store/actions/movies';
import { State } from '@store/reducers';
import * as Styled from './styles';

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
        genres: film.genres.map((genre) => genre.genre).join(', ') || '',
        countries: film.countries.map((country) => country.country).join(', ') || '',
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
    <Styled.Container>
      <Styled.MovieCategoryContainer>
        <Link to={`${RouteNames.COLLECTIONS}/${MovieCollections.Top}`}>Лучшее</Link>

        <Slider slides={slides} onClick={handleSlideClick} handleShowModal={handleShowModal} />
      </Styled.MovieCategoryContainer>

      <RatingModal showModal={showModal} onClose={handleShowModal} />
    </Styled.Container>
  );
};
