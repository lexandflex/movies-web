import { Navigator } from '@services/navigatorService';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MoviesGrid } from '../../components/MoviesGrid';
import { RouteNames } from '../../router/routeNames';
import { getTopAction } from '../../store/actions/movies';
import { State } from '../../store/reducers';

export const Collection: FC = () => {
  const dispatch = useDispatch();

  const { name } = useParams();

  console.log({ name });

  const [page, setPage] = useState(1);

  const handleMovieClick = (id: string) => {
    console.log({ path: `${RouteNames.MOVIES}/${id}` });
    Navigator.push(`/${RouteNames.MOVIES}/${id}`);
  };

  const movies = useSelector((state: State) => state.movies.topFilms);

  useEffect(() => {
    dispatch(getTopAction.request({ page }));
  }, [dispatch, page]);

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

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <MoviesGrid movies={slides} onClick={handleMovieClick} handleShowModal={handleShowModal} />
  );
};
