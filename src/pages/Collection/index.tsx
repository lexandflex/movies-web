import { Navigator } from '@services/navigatorService';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MoviesGrid } from '../../components/MoviesGrid';
import { RatingModal } from '../../components/RatingModal';
import { MovieCollections } from '../../constants/movieCollections';
import { RouteNames } from '../../router/routeNames';
import { getByGenreAction, getGenresAction, getTopAction } from '../../store/actions/movies';
import { State } from '../../store/reducers';
import * as Styled from './styles';

export const Collection: FC = () => {
  const dispatch = useDispatch();

  const { name } = useParams();

  const [page, setPage] = useState(1);

  const [films, setFilms] = useState<
    {
      id: string;
      image: string;
      name: string;
      year: string;
      genres: string;
      countries: string;
    }[]
  >([]);

  const [genreId, setGenreId] = useState('');

  const handleMovieClick = (id: string) => {
    Navigator.push(`/${RouteNames.MOVIES}/${id}`);
  };

  const { topFilms, moviesByGenre, genres } = useSelector((state: State) => state.movies);

  useEffect(() => {
    dispatch(getGenresAction.request());
  }, []);

  useEffect(() => {
    if (name === MovieCollections.Top) {
      dispatch(getTopAction.request({ page }));
    } else {
      const genreId = genres.find((genre) => genre.genre === name)?.id.toString() || '';
      setGenreId(genreId);
      dispatch(
        getByGenreAction.request({
          genreId,
          page,
        }),
      );
    }
  }, [dispatch, page, genres, name]);

  useMemo(() => {
    if (name === MovieCollections.Top) {
      const nextPage = topFilms.films.map((film) => ({
        id: `${film.filmId}`,
        image: film.posterUrlPreview || '',
        name: film.nameRu || '',
        year: film.year || '',
        genres: film.genres.map((genre) => genre.genre).join(', ') || '',
        countries: film.countries.map((country) => country.country).join(', ') || '',
      }));

      if (!topFilms.films.some((film) => film.filmId === 0)) {
        setFilms((prevState) => [...prevState, ...nextPage]);
      }
    }
  }, [topFilms, name]);

  useMemo(() => {
    if (name !== MovieCollections.Top) {
      const nextPage = moviesByGenre[genreId]?.items.map((film) => ({
        id: `${film.kinopoiskId}`,
        image: film.posterUrlPreview || '',
        name: film.nameRu || '',
        year: `${film.year}` || '',
        genres: film.genres.map((genre) => genre.genre).join(', ') || '',
        countries: film.countries.map((country) => country.country).join(', ') || '',
      }));

      if (!moviesByGenre[genreId]?.items.some((film) => film.kinopoiskId === 0) && nextPage) {
        setFilms((prevState) => [...prevState, ...nextPage]);
      }
    }
  }, [moviesByGenre, name, genreId]);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleClickShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <Styled.Container>
        <MoviesGrid movies={films} onClick={handleMovieClick} handleShowModal={handleShowModal} />
        <Styled.ShowMoreIcon onClick={handleClickShowMore} />
      </Styled.Container>

      <RatingModal showModal={showModal} onClose={handleShowModal} />
    </>
  );
};
