import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navigator } from '@services/navigatorService';
import { MoviesGrid } from '@components/MoviesGrid';
import { MovieCollections } from '@constants/movieCollections';
import { RouteNames } from '@router/routeNames';
import { getByGenreAction, getGenresAction, getTopAction } from '@store/actions/movies';
import { State } from '@store/reducers';
import { Spinner } from '@components/Spinner';
import * as Styled from './styles';
import { Movies } from './types';

export const Collection: FC = () => {
  const dispatch = useDispatch();

  const { name } = useParams();

  const [page, setPage] = useState(1);

  const [films, setFilms] = useState<Movies>({});

  const [genreId, setGenreId] = useState('');

  const [numberOfPages, setNumberOfPages] = useState(1);

  const handleMovieClick = (id: string) => {
    Navigator.push(`/${RouteNames.MOVIES}/${id}`);
  };

  const { topFilms, moviesByGenre, genres, loading } = useSelector((state: State) => state.movies);

  useEffect(() => {
    if (name !== MovieCollections.Top) {
      dispatch(getGenresAction.request());
    }
  }, []);

  console.log({
    name,
    page,
    genreId,
    numberOfPages,
  });

  useEffect(() => {
    if (name === MovieCollections.Top) {
      setNumberOfPages(topFilms.pagesCount);
    } else {
      setNumberOfPages(moviesByGenre[genreId]?.totalPages || 1);
    }
  }, [topFilms, moviesByGenre, genreId, name]);

  useEffect(() => {
    const genreId = genres.find((genre) => genre.genre === name)?.id.toString() || '';
    setGenreId(genreId);
  }, [genres, name]);

  useEffect(() => {
    if (page <= numberOfPages) {
      if (name === MovieCollections.Top) {
        dispatch(getTopAction.request({ page }));
      } else {
        dispatch(
          getByGenreAction.request({
            genreId,
            page,
          }),
        );
      }
    }
  }, [dispatch, page, genres, name, genreId, numberOfPages]);

  useEffect(() => {
    if (name === MovieCollections.Top) {
      const nextPage = topFilms.films.reduce<Movies>(
        (prev, current) => ({
          ...prev,
          [`${current.filmId}`]: {
            id: `${current.filmId}`,
            image: current.posterUrlPreview || '',
            name: current.nameRu || '',
            year: current.year || '',
            genres: current.genres.map((genre) => genre.genre).join(', ') || '',
            countries: current.countries.map((country) => country.country).join(', ') || '',
          },
        }),
        {},
      );

      if (!topFilms.films.some((film) => film.filmId === 0)) {
        setFilms((prevState) => ({ ...prevState, ...nextPage }));
      }
    }
  }, [topFilms, name]);

  useEffect(() => {
    if (name !== MovieCollections.Top) {
      const nextPage = moviesByGenre[genreId]?.items.reduce<Movies>(
        (prev, current) => ({
          ...prev,
          [`${current.kinopoiskId}`]: {
            id: `${current.kinopoiskId}`,
            image: current.posterUrlPreview || '',
            name: current.nameRu || '',
            year: `${current.year}` || '',
            genres: current.genres.map((genre) => genre.genre).join(', ') || '',
            countries: current.countries.map((country) => country.country).join(', ') || '',
          },
        }),
        {},
      );

      if (!moviesByGenre[genreId]?.items.some((film) => film.kinopoiskId === 0) && nextPage) {
        setFilms((prevState) => ({ ...prevState, ...nextPage }));
      }
    }
  }, [moviesByGenre, name, genreId]);

  const handleClickShowMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <Styled.Container>
      <MoviesGrid movies={Object.values(films)} onClick={handleMovieClick} />
      {!loading ? (
        <Styled.ShowMoreIcon onClick={handleClickShowMore} isActive={page < numberOfPages} />
      ) : (
        <Spinner />
      )}
    </Styled.Container>
  );
};
