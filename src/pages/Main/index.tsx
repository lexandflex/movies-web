import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RouteNames } from '@router/routeNames';
import { Navigator } from '@services/navigatorService';
import { Slider } from '@components/Slider';
import { MovieCollections } from '@constants/movieCollections';
import { getByGenreAction, getGenresAction, getTopAction } from '@store/actions/movies';
import { State } from '@store/reducers';
import { Genre, MoviesByGenre } from '../../models/movies';
import * as Styled from './styles';

const COLLECTIONS = [
  MovieCollections.Thriller,
  MovieCollections.Drama,
  MovieCollections.Crime,
  MovieCollections.Action_Movie,
  MovieCollections.Comedy,
  MovieCollections.Military,
  MovieCollections.Horrors,
  MovieCollections.Cartoon,
];

export const Main: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { topFilms, moviesByGenre, genres } = useSelector((state: State) => state.movies);

  const [genreWithId, setGenreWithId] = useState<Genre[]>([]);

  const handleSlideClick = (id: string) => {
    Navigator.push(`${RouteNames.MOVIES}/${id}`);
  };

  useEffect(() => {
    genreWithId.forEach(({ id }) => {
      dispatch(getByGenreAction.request({ genreId: `${id}`, page }));
    });
  }, [genreWithId]);

  const topFilmsSlides = useMemo(
    () =>
      topFilms.films.map((film) => ({
        id: `${film.filmId}`,
        image: film.posterUrlPreview || '',
        name: film.nameRu || '',
        year: film.year || '',
        genres: film.genres.map((genre) => genre.genre).join(', ') || '',
        countries: film.countries.map((country) => country.country).join(', ') || '',
      })),
    [topFilms],
  );

  const filmsByGenreSlides = useMemo(() => {
    const arr = Object.entries(moviesByGenre);
    return arr.reduce<{
      [key: string]: {
        id: string;
        image: string;
        name: string;
        year: string;
        genres: string;
        countries: string;
      }[];
    }>((prev, current) => {
      const key = current[0];

      const slides = current[1].items.map((film) => ({
        id: `${film.kinopoiskId}`,
        image: film.posterUrlPreview || '',
        name: film.nameRu || '',
        year: `${film.year}` || '',
        genres: film.genres.map((genre) => genre.genre).join(', ') || '',
        countries: film.countries.map((country) => country.country).join(', ') || '',
      }));

      return { ...prev, [key]: slides };
    }, {});
  }, [moviesByGenre]);

  console.log(filmsByGenreSlides);

  useEffect(() => {
    dispatch(getGenresAction.request());
  }, []);

  useEffect(() => {
    const collections = COLLECTIONS.reduce<Genre[]>((prev, current) => {
      const genre = genres.find((genre) => genre.genre === current);
      if (genre) {
        prev.push(genre);
      }
      return prev;
    }, []);

    if (collections) {
      setGenreWithId(collections);
    }
  }, [genres]);

  useEffect(() => {
    dispatch(getTopAction.request({ page }));
  }, [dispatch, page]);

  return (
    <Styled.Container>
      <Styled.MovieCategoryContainer>
        <Link to={`${RouteNames.COLLECTIONS}/${MovieCollections.Top}`}>Лучшее</Link>

        <Slider
          slides={topFilmsSlides}
          onClick={handleSlideClick}
        />
      </Styled.MovieCategoryContainer>

      {genreWithId.map(({ id, genre }) => {
        if (id in filmsByGenreSlides) {
          return (
            <Styled.MovieCategoryContainer key={id}>
              <Link to={`${RouteNames.COLLECTIONS}/${genre}`}>{genre}</Link>

              <Slider
                slides={filmsByGenreSlides[id]}
                onClick={handleSlideClick}
              />
            </Styled.MovieCategoryContainer>
          );
        }
        return null;
      })}
    </Styled.Container>
  );
};
